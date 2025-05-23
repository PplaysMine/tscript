//
// This file defines the "light" and "dark" color themes.
// They can be customized by changing the color values, either directly
// in this file or by overwriting them at runtime, ideally before
// creating editor instances.
//

import { ThemeName } from "../tgui";
import { HightlightColor } from "./language";

export interface ThemeDefinition {
	bars: {
		linenumbers: {
			background: string;
			color: string;
		};
		icons: {
			background: string;
			color: string;
		};
		separator: string;
	};
	content: {
		background: string;
		highlight: Record<HightlightColor, string>;
		cursorline: [string, string];
		selection: [string, string];
		bracket: [string, string];
	};
	search: {
		background: string;
		separator: string;
		fields: string;
		color: string;
		close: string;
	};
}

export const themes: Record<ThemeName, ThemeDefinition> = {
	light: {
		bars: {
			linenumbers: {
				background: "#f7f7f7",
				color: "#888",
			},
			icons: {
				background: "#f0f0f0",
				color: "#a00",
			},
			separator: "#bbb",
		},
		content: {
			background: "#fff",
			highlight: [
				"#000",
				"#00d",
				"#0a0",
				"#088",
				"#c00",
				"#a0a",
				"#840",
				"#f80",
				"#dd0",
				"#888",
			],
			cursorline: ["#ffb", "#ffd"],
			selection: ["#ddf", "#eee"],
			bracket: ["rgba(0,255,0,0.5)", "rgba(255,0,0,0.5)"],
		},
		search: {
			background: "#ddd",
			separator: "#bbb",
			fields: "#fff",
			color: "#000",
			close: "#f00",
		},
	},
	dark: {
		bars: {
			linenumbers: {
				background: "#222",
				color: "#aaa",
			},
			icons: {
				background: "#2a2a2a",
				color: "#f44",
			},
			separator: "#444",
		},
		content: {
			background: "#222",
			highlight: [
				"#fff",
				"#68f",
				"#4f4",
				"#2ff",
				"#f44",
				"#d4f",
				"#c84",
				"#fb4",
				"#ff4",
				"#888",
			],
			cursorline: ["#444", "#333"],
			selection: ["#448", "#666"],
			bracket: ["rgba(0,255,0,0.5)", "rgba(255,0,0,0.5)"],
		},
		search: {
			background: "#222",
			separator: "#444",
			fields: "#000",
			color: "#fff",
			close: "#f88",
		},
	},
};
