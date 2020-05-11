import {useEffect} from "react";
import {authService} from "../auth/authService";
import {ValidOrRefreshedXToken} from "../types/types";
import {removeBearerFromTokenHeader} from "../utils/utils";

/** This hook takes a xToken/xRefreshToken-pair and uses them for verification.
 *
 * Returns the x-token if valid, or a refreshed x-token if not valid but x-refresh-token is valid.
 *
 * Otherwise returns null.
 */
export const useTokensToRefreshIfNeeded = (
	xToken: string | null,
	xRefreshToken: string | null
): Promise<ValidOrRefreshedXToken> => {
	return new Promise((resolve, reject) => {
		useEffect(() => {
			if (location.pathname === "/register" || location.pathname === "/login") {
				return;
			} else {
				if (!xToken) {
					console.log("Verifying server side!");

					authService
						.verifyXRefreshTokenServerSide(xRefreshToken)
						.then(res => {
							if (res.isVerified) {
								resolve(res.refreshedXToken);
							} else {
								reject(null);
							}
						})
						.catch(e => (console.log(e), reject(null)));
				}

				if (!xRefreshToken) {
					reject(null);
				}

				if (authService.isClientSideXTokenValid(xToken)) {
					resolve(removeBearerFromTokenHeader(xToken));
				} else {
					console.log("Verifying server side!");

					authService
						.verifyXRefreshTokenServerSide(xRefreshToken)
						.then(res => {
							if (res.isVerified) {
								resolve(res.refreshedXToken);
							} else {
								reject(null);
							}
						})
						.catch(e => (console.log(e), reject(null)));
				}
			}
		});
	});
};