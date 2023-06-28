const defaultValues = {
	"catenary cable": {
		"EI": 131.7,
		"height": 1.2,
		"line density": 1.08,
		"span": 55.0,
		"tension": 16000.0,
		"gravity": 9.81
	},
	"contact wire": {
		"EI": 195.0,
		"height": 0.0,
		"line density": 1.35,
		"span": 55.0,
		"tension": 22000.0,
		"gravity": 9.81
	},
	"droppers": {
		"EA": 200000.0,
		"line density": 0.117,
		"catenary cable clamp mass": 0.195,
		"contact wire clamp mass": 0.165,
		"gravity": 9.81
	},
	"dropper schedule": {
		"dropper positions": [
			4.5,
			10.25,
			16.0,
			21.75,
			27.5,
			33.25,
			39.0,
			44.75,
			50.5
		],
		"encumbrance": 1.2,
		"nominal lengths": [
			1.017,
			0.896,
			0.810,
			0.758,
			0.741,
			0.758,
			0.810,
			0.896,
			1.017
		],
		"number of droppers": 9,
		"target sag": [
			-0.0,
			-0.024,
			-0.041,
			-0.052,
			-0.055,
			-0.052,
			-0.041,
			-0.024,
			-0.0
		]
	},
	"contact wire suspension spring": {
		"stiffness": 2673.58
	},
	"catenary cable suspension spring": {
		"stiffness": 500000.0
	},
	"pantograph 1": {
		"xinit": 1.0,
		"zbase": -0.15,
		"speed": 25.0,
		"force": 100.0,
		"m": 7.5,
		"k": 150.0,
		"c": 0.0
	},
	"pantograph 3": {
		"xinit": 1.0,
		"zbase": -0.15,
		"speed": 25.0,
		"force": 100.0,
		"m1": 6.0,
		"k1": 160.0,
		"c1": 0.0,
		"m2": 9.0,
		"k2": 15500.0,
		"c2": 0.0,
		"m3": 7.5,
		"k3": 7000.0,
		"c3": 0.0
	}
}

export default defaultValues
