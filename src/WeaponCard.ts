import Card from "./Card";

export default class WeaponCard extends Card {
	public premium = false;
	public bodyTextColor = "white";
	public bodyTextCoords = {
		dx: 146,
		dy: 628,
		dWidth: 388,
		dHeight: 168,
		sWidth: 388,
		sHeight: 168,
	};
	public cardFoundationAsset = null;
	public cardFoundationCoords = null;
	public baseCardFrameAsset = "frame-weapon-";
	public baseCardFrameCoords = {
		sWidth: 527,
		sHeight: 775,
		dx: 80,
		dy: 103,
		dWidth: 527,
		dHeight: 775,
	};
	public nameBannerAsset = "name-banner-weapon";
	public baseRarityGemAsset = "rarity-weapon-";
	public dragonAsset = "elite-weapon";
	public dragonCoords = {
		dx: 199,
		dy: 62,
		dWidth: 420,
		dHeight: 247,
		sWidth: 420,
		sHeight: 247,
	};
	public attackGemAsset = "attack-weapon";
	public healthGemAsset = "durability";
	public attackGemCoords = {
		sWidth: 135,
		sHeight: 133,
		dx: 65,
		dy: 753,
		dWidth: 135,
		dHeight: 133,
	};
	public attackTextCoords = {x: 136, y: 820};
	public healthGemCoords = {
		sWidth: 126,
		sHeight: 140,
		dx: 501,
		dy: 744,
		dWidth: 126,
		dHeight: 140,
	};
	public healthTextCoords = {x: 563, y: 819};
	public nameBannerCoords = {
		sWidth: 514,
		sHeight: 108,
		dx: 87,
		dy: 468,
		dWidth: 514,
		dHeight: 108,
	};
	public rarityGemCoords = {
		sWidth: 96,
		sHeight: 90,
		dx: 302,
		dy: 520,
		dWidth: 96,
		dHeight: 90,
	};
	public raceBannerAsset = null;
	public raceBannerCoords = null;
	public raceTextCoords = null;
	public nameTextCurve = {
		pathMiddle: 0.56,
		maxWidth: 450,
		curve: [{x: 18, y: 56}, {x: 66, y: 56}, {x: 400, y: 56}, {x: 456, y: 56}],
	};
	public artCoords = {
		sWidth: 384,
		sHeight: 384,
		dx: 152,
		dy: 135,
		dWidth: 384,
		dHeight: 384,
	};
	public artClipPolygon = [
		{x: 352, y: 139},
		{x: 418, y: 155},
		{x: 469, y: 188},
		{x: 497, y: 222},
		{x: 523, y: 267},
		{x: 533, y: 315},
		{x: 531, y: 366},
		{x: 514, y: 420},
		{x: 485, y: 461},
		{x: 444, y: 496},
		{x: 375, y: 515},
		{x: 309, y: 515},
		{x: 236, y: 484},
		{x: 192, y: 434},
		{x: 160, y: 371},
		{x: 158, y: 303},
		{x: 173, y: 246},
		{x: 203, y: 201},
		{x: 242, y: 167},
		{x: 287, y: 148},
	];

	public getWatermarkCoords() {
		return {
			dx: 241,
			dy: 599,
			dWidth: 220,
			dHeight: 220,
		};
	}
}
