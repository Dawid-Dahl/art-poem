import {
	SQLRefreshToken,
	xTokenPayload,
	AuthUser,
	AuthJsonResponsePayload,
	JsonResponse,
} from "../types/types";
import jwt from "jsonwebtoken";
import sqlite from "sqlite3";
import {config} from "dotenv";
import {Tables} from "../types/enums";
import {Request} from "express";

interface RequestWithUser extends Request {
	user?: object;
}

config({
	path: "../../.env",
});

export const log = (label: string, expression = "") => {
	console.log(label + " --- ");
	console.log(expression);
	return expression;
};

export const generateId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

export const authJsonResponse = (
	success: boolean,
	payload?: AuthJsonResponsePayload,
	xToken?: string,
	xRefreshToken?: string
) =>
	!payload && !xToken && !xRefreshToken
		? {success}
		: !xToken && !xRefreshToken
		? {success, payload}
		: !xRefreshToken
		? {success, payload, xToken}
		: {success, payload, xToken, xRefreshToken};

export const jsonResponse = (
	success: boolean,
	payload?: string | NodeJS.ReadableStream | undefined
) => (!payload ? {success} : {success, payload});

export const removeBearerFromTokenHeader = (tokenHeader: string | undefined) =>
	tokenHeader?.split(" ")[1];

export const extractPayloadFromBase64JWT = (jwt: string | undefined): xTokenPayload | undefined =>
	!jwt
		? undefined
		: [jwt]
				.map(x => x.split(".")[1])
				.map(x => Buffer.from(x, "base64"))
				.map(x => x.toString("utf8"))
				.map(x => JSON.parse(x))[0];

export const issueAccessToken = (user: AuthUser, privKey: string, expiresIn = "15s") => {
	const payload = {
		sub: user.id,
	};

	const signedXTokenPromise = new Promise<string>((res, rej) => {
		jwt.sign(payload, privKey, {expiresIn, algorithm: "RS256"}, (err, xToken) =>
			err ? rej(err) : res(xToken)
		);
	});

	return signedXTokenPromise;
};

export const issueRefreshToken = (user: AuthUser, privKey: string, expiresIn = "30d") => {
	const payload = {
		sub: user.id,
	};

	const signedXRefreshTokenPromise = new Promise<string>((res, rej) => {
		jwt.sign(payload, privKey, {expiresIn, algorithm: "RS256"}, (err, xRefreshToken) =>
			err ? rej(err) : res(xRefreshToken)
		);
	});

	return signedXRefreshTokenPromise;
};

export const addRefreshTokenToDatabase = (refreshToken: SQLRefreshToken): void => {
	const dbPath = process.env.DB_REFRESH_TOKEN_PATH || "";

	const db = new sqlite.Database(dbPath, err =>
		err ? console.error(err) : console.log("Connected to the SQLite database")
	);

	const sql = `INSERT INTO ${Tables.refresh_tokens} (sub, iat, refresh_token) VALUES (?, ?, ?)`;
	const values = [refreshToken.sub, refreshToken.iat, refreshToken.xRefreshToken];

	db.run(sql, values, err =>
		!err ? console.log("Refresh Token added to database!") : console.error(err)
	);

	db.close(err => (err ? console.error(err) : console.log("Closed the database connection")));
};

export const constructUserWithoutPasswordFromSqlResult = (payload: AuthUser): AuthUser => ({
	id: payload.id,
	email: payload.email,
});

export const constructUserFromTokenPayload = (payload: xTokenPayload): AuthUser => ({
	id: payload.sub,
});

export const attachUserToRequest = (req: RequestWithUser, user: AuthUser) => {
	req.user = {
		id: user.id,
	};
};

export const checkIfXRefreshTokenExistsInDb = (
	xRefreshToken: string | undefined
): Promise<boolean> => {
	if (xRefreshToken) {
		const dbPath = process.env.DB_REFRESH_TOKEN_PATH || "";

		const db = new sqlite.Database(dbPath, err =>
			err ? console.error(err) : console.log("Connected to the SQLite database")
		);

		const sql = `SELECT 1 FROM ${Tables.refresh_tokens} WHERE refresh_token = ?`;

		return new Promise((res, rej) => {
			db.get(sql, xRefreshToken, (err, row) => {
				db.close(err =>
					err ? console.error(err) : console.log("Closed the database connection")
				);
				err ? rej(err) : res(Boolean(row));
			});
		});
	} else {
		throw new Error("Token was undefined and not a string.");
	}
};

export const refreshAndFetch = (
	url: string,
	{method, headers, body}: RequestInit
): Promise<Response> => {
	return fetch(url, {
		method: method,
		headers,
		body,
	});
};
