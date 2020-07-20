import {ReduxArtPoem, ReduxCollection} from "../types/types";

export const sampleArtPoems: ReduxArtPoem[] = [
	{
		id: 89,
		title: "My First Poem",
		content: "TEST",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594032891831-e1d4e9-angry-chameleon.jpg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-06-06T17:50:31.108Z",
		updatedAt: "2020-07-06T10:54:52.000Z",
		collections: [
			{
				id: 54,
				name: "My Collection",
				public: true,
				createdAt: "2020-05-19T16:04:04.386Z",
				updatedAt: "2020-05-19T16:04:04.386Z",
			},
		],
	},
	{
		id: 92,
		title: "So sad",
		content: "So very sad...",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594032426291-9f21e4-Bundesarchiv_Bild_183-R92264,_Herbert_von_Karajan.jpg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-06T10:47:06.508Z",
		updatedAt: "2020-07-06T10:47:06.508Z",
		collections: [
			{
				id: 55,
				name: "Sad Poems",
				public: true,
				createdAt: "2020-05-19T16:31:18.156Z",
				updatedAt: "2020-05-19T16:31:18.156Z",
			},
		],
	},
	{
		id: 93,
		title: "My Second Poem",
		content: "SECOND!",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594032565968-bcd6df-71-+Is0zepL._AC_SL1000_.jpg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-06T10:47:26.418Z",
		updatedAt: "2020-07-06T10:49:26.000Z",
		collections: [
			{
				id: 63,
				name: "The Best Poems",
				public: true,
				createdAt: "2020-05-24T04:56:20.881Z",
				updatedAt: "2020-05-24T04:56:20.881Z",
			},
		],
	},
	{
		id: 94,
		title: "Super Duper Sad!",
		content: "Sad Generators.",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594115168551-9041d5-Screenshot_2020-05-24_at_07.38.50.png",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-07T09:46:09.406Z",
		updatedAt: "2020-07-07T09:46:09.406Z",
		collections: [
			{
				id: 55,
				name: "Sad Poems",
				public: true,
				createdAt: "2020-05-19T16:31:18.156Z",
				updatedAt: "2020-05-19T16:31:18.156Z",
			},
		],
	},
	{
		id: 95,
		title: "Bamse Paket",
		content:
			"Fina Bamses paket önskar dig bra snö-fantasti - det växer klok pilla henne röd och kul.",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594156900362-7e3fd9-c3f2ae01-620c-4462-86c0-ac55e6150d2b.jpeg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-07T21:21:41.378Z",
		updatedAt: "2020-07-07T21:21:41.378Z",
		collections: [
			{
				id: 64,
				name: "Inspiring Poems",
				public: true,
				createdAt: "2020-07-07T13:50:11.658Z",
				updatedAt: "2020-07-07T13:50:11.658Z",
			},
		],
	},
];

export const sampleArtPoemsWithNewDataAdded: ReduxArtPoem[] = [
	{
		id: 89,
		title: "My First Poem",
		content: "TEST",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594032891831-e1d4e9-angry-chameleon.jpg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-06-06T17:50:31.108Z",
		updatedAt: "2020-07-06T10:54:52.000Z",
		collections: [
			{
				id: 54,
				name: "My Collection",
				public: true,
				createdAt: "2020-05-19T16:04:04.386Z",
				updatedAt: "2020-05-19T16:04:04.386Z",
			},
		],
	},
	{
		id: 92,
		title: "So sad",
		content: "So very sad...",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594032426291-9f21e4-Bundesarchiv_Bild_183-R92264,_Herbert_von_Karajan.jpg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-06T10:47:06.508Z",
		updatedAt: "2020-07-06T10:47:06.508Z",
		collections: [
			{
				id: 55,
				name: "Sad Poems",
				public: true,
				createdAt: "2020-05-19T16:31:18.156Z",
				updatedAt: "2020-05-19T16:31:18.156Z",
			},
		],
	},
	{
		id: 93,
		title: "My Second Poem",
		content: "SECOND!",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594032565968-bcd6df-71-+Is0zepL._AC_SL1000_.jpg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-06T10:47:26.418Z",
		updatedAt: "2020-07-06T10:49:26.000Z",
		collections: [
			{
				id: 63,
				name: "The Best Poems",
				public: true,
				createdAt: "2020-05-24T04:56:20.881Z",
				updatedAt: "2020-05-24T04:56:20.881Z",
			},
		],
	},
	{
		id: 94,
		title: "Super Duper Sad!",
		content: "Sad Generators.",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594115168551-9041d5-Screenshot_2020-05-24_at_07.38.50.png",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-07T09:46:09.406Z",
		updatedAt: "2020-07-07T09:46:09.406Z",
		collections: [
			{
				id: 55,
				name: "Sad Poems",
				public: true,
				createdAt: "2020-05-19T16:31:18.156Z",
				updatedAt: "2020-05-19T16:31:18.156Z",
			},
		],
	},
	{
		id: 95,
		title: "Bamse Paket",
		content:
			"Fina Bamses paket önskar dig bra snö-fantasti - det växer klok pilla henne röd och kul.",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594156900362-7e3fd9-c3f2ae01-620c-4462-86c0-ac55e6150d2b.jpeg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-07T21:21:41.378Z",
		updatedAt: "2020-07-07T21:21:41.378Z",
		collections: [
			{
				id: 64,
				name: "Inspiring Poems",
				public: true,
				createdAt: "2020-07-07T13:50:11.658Z",
				updatedAt: "2020-07-07T13:50:11.658Z",
			},
		],
	},
	{
		id: 102,
		title: "So Different!",
		content: "So Different!!!",
		likes: 7,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594115168551-9041d5-Screenshot_2020-05-24_at_07.38.50.png",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-07T09:46:09.406Z",
		updatedAt: "2020-07-07T09:46:09.406Z",
		collections: [
			{
				id: 55,
				name: "Sad Poems",
				public: true,
				createdAt: "2020-05-19T16:31:18.156Z",
				updatedAt: "2020-05-19T16:31:18.156Z",
			},
		],
	},
];

export const sampleArtPoemArray1: ReduxArtPoem[] = [
	{
		id: 95,
		title: "Bamse Paket",
		content:
			"Fina Bamses paket önskar dig bra snö-fantasti - det växer klok pilla henne röd och kul.",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594156900362-7e3fd9-c3f2ae01-620c-4462-86c0-ac55e6150d2b.jpeg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-07T21:21:41.378Z",
		updatedAt: "2020-07-07T21:21:41.378Z",
		collections: [
			{
				id: 64,
				name: "Inspiring Poems",
				public: true,
				createdAt: "2020-07-07T13:50:11.658Z",
				updatedAt: "2020-07-07T13:50:11.658Z",
			},
		],
	},
];

export const sampleArtPoemArray2: ReduxArtPoem[] = [
	{
		id: 92,
		title: "So sad",
		content: "So very sad...",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594032426291-9f21e4-Bundesarchiv_Bild_183-R92264,_Herbert_von_Karajan.jpg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-06T10:47:06.508Z",
		updatedAt: "2020-07-06T10:47:06.508Z",
		collections: [
			{
				id: 55,
				name: "Sad Poems",
				public: true,
				createdAt: "2020-05-19T16:31:18.156Z",
				updatedAt: "2020-05-19T16:31:18.156Z",
			},
		],
	},
	{
		id: 94,
		title: "Super Duper Sad!",
		content: "Sad Generators.",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594115168551-9041d5-Screenshot_2020-05-24_at_07.38.50.png",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-07T09:46:09.406Z",
		updatedAt: "2020-07-07T09:46:09.406Z",
		collections: [
			{
				id: 55,
				name: "Sad Poems",
				public: true,
				createdAt: "2020-05-19T16:31:18.156Z",
				updatedAt: "2020-05-19T16:31:18.156Z",
			},
		],
	},
];

export const sampleArrWithDifferentData: ReduxArtPoem[] = [
	{
		id: 92,
		title: "So sad",
		content: "So very sad...",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594032426291-9f21e4-Bundesarchiv_Bild_183-R92264,_Herbert_von_Karajan.jpg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-06T10:47:06.508Z",
		updatedAt: "2020-07-06T10:47:06.508Z",
		collections: [
			{
				id: 55,
				name: "Sad Poems",
				public: true,
				createdAt: "2020-05-19T16:31:18.156Z",
				updatedAt: "2020-05-19T16:31:18.156Z",
			},
		],
	},
	{
		id: 94,
		title: "Super Duper Sad!",
		content: "Sad Generators.",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594115168551-9041d5-Screenshot_2020-05-24_at_07.38.50.png",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-07T09:46:09.406Z",
		updatedAt: "2020-07-07T09:46:09.406Z",
		collections: [
			{
				id: 55,
				name: "Sad Poems",
				public: true,
				createdAt: "2020-05-19T16:31:18.156Z",
				updatedAt: "2020-05-19T16:31:18.156Z",
			},
		],
	},
	{
		id: 102,
		title: "So Different!",
		content: "So Different!!!",
		likes: 7,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594115168551-9041d5-Screenshot_2020-05-24_at_07.38.50.png",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-07T09:46:09.406Z",
		updatedAt: "2020-07-07T09:46:09.406Z",
		collections: [
			{
				id: 55,
				name: "Sad Poems",
				public: true,
				createdAt: "2020-05-19T16:31:18.156Z",
				updatedAt: "2020-05-19T16:31:18.156Z",
			},
		],
	},
];

export const sampleArrWithPoemsFromSeparateUsers: ReduxArtPoem[] = [
	{
		id: 126,
		title: "My First Poem",
		content: "The first!",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594584366412-41a042-angry-chameleon.jpg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-12T20:06:07.020Z",
		updatedAt: "2020-07-12T20:07:10.000Z",
		collections: [
			{
				id: 54,
				name: "My Collection",
				public: true,
				createdAt: "2020-05-19T16:04:04.386Z",
				updatedAt: "2020-05-19T16:04:04.386Z",
			},
		],
	},
	{
		id: 127,
		title: "Victor's Poem",
		content: "So Good!",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594585034509-37cdcd-the-road-cityscape.jpg",
		userId: "6ww9dh7q21kae4xr9q",
		createdAt: "2020-07-12T20:17:14.960Z",
		updatedAt: "2020-07-12T20:17:14.960Z",
		collections: [
			{
				id: 56,
				name: "My Collection",
				public: true,
				createdAt: "2020-05-19T16:32:05.220Z",
				updatedAt: "2020-05-19T16:32:05.220Z",
			},
		],
	},
	{
		id: 128,
		title: "So sad",
		content: "So very sad!",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594585128110-2a084f-post_apocalyptic_beach_by_clapham1994-d62n6a3.jpg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-12T20:18:48.510Z",
		updatedAt: "2020-07-12T20:18:48.510Z",
		collections: [
			{
				id: 55,
				name: "Sad Poems",
				public: true,
				createdAt: "2020-05-19T16:31:18.156Z",
				updatedAt: "2020-05-19T16:31:18.156Z",
			},
		],
	},
	{
		id: 129,
		title: "My Second Poem",
		content: "Second!",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594589451652-f4276c-0eab10cca14a22f2e63d9a3612be1101.jpg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-12T21:30:52.214Z",
		updatedAt: "2020-07-12T21:30:52.214Z",
		collections: [
			{
				id: 54,
				name: "My Collection",
				public: true,
				createdAt: "2020-05-19T16:04:04.386Z",
				updatedAt: "2020-05-19T16:04:04.386Z",
			},
		],
	},
];

export const sampleArrWithoutPoemsFromSeparateUsers: ReduxArtPoem[] = [
	{
		id: 126,
		title: "My First Poem",
		content: "The first!",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594584366412-41a042-angry-chameleon.jpg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-12T20:06:07.020Z",
		updatedAt: "2020-07-12T20:07:10.000Z",
		collections: [
			{
				id: 54,
				name: "My Collection",
				public: true,
				createdAt: "2020-05-19T16:04:04.386Z",
				updatedAt: "2020-05-19T16:04:04.386Z",
			},
		],
	},
	{
		id: 129,
		title: "My Second Poem",
		content: "Second!",
		likes: 0,
		imageUrl:
			"https://storage.googleapis.com/poem-art-bucket/1594589451652-f4276c-0eab10cca14a22f2e63d9a3612be1101.jpg",
		userId: "diwr0o84w97kae3xq2p",
		createdAt: "2020-07-12T21:30:52.214Z",
		updatedAt: "2020-07-12T21:30:52.214Z",
		collections: [
			{
				id: 54,
				name: "My Collection",
				public: true,
				createdAt: "2020-05-19T16:04:04.386Z",
				updatedAt: "2020-05-19T16:04:04.386Z",
			},
		],
	},
];

export const sampleReduxCollection1: ReduxCollection = {
	id: "64",
	name: "Inspiring Poems",
	public: true,
};

export const sampleReduxCollection2: ReduxCollection = {id: "55", name: "Sad Poems", public: true};

export const sampleReduxCollection3: ReduxCollection = {
	id: "54",
	name: "My Collection",
	public: true,
};

export const user = {
	id: "diwr0o84w97kae3xq2p",
	username: "Dawid",
	admin: false,
};