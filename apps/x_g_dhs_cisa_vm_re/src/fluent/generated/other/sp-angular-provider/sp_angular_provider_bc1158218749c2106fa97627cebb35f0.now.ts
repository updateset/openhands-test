import { SPAngularProvider } from '@servicenow/sdk/core'

SPAngularProvider({
    $id: Now.ID['bc1158218749c2106fa97627cebb35f0'],
    name: 'rscStateRegions',
    type: 'factory',
    script: `function rscStateRegions() {
	var state = {};
	state.stateObj = {};
	state.currentState = '';
	state.currentRegion = '';

	state.loadStates = function (stateObj) {
		stateObj.forEach((arr_item)=>{ 

			arr_item["parent.name"] = arr_item["parent.name"].replace("Region ", "");
			arr_item["parent.name"] = arr_item["parent.name"].trim();
			state.stateObj[arr_item.name] = arr_item;
			
		});

	};

	state.recordState = function (value) {
		state.currentState = value;
		state.currentRegion = state.stateObj[value]["parent.name"];
	};

	//regions value needs to be added to table in mission instance
	var state_region_map =  {
		"Alabama":{"state":"Alabama","region":"4"},
		"Alaska":{"state":"Alaska","region":"10"},
		"American Samoa":{"state":"American Samoa","region":"9"},
		"Arizona":{"state":"Arizona","region":"9"},
		"Arkansas":{"state":"Arkansas","region":"6"},
		"California":{"state":"California","region":"9"},
		"Colorado":{"state":"Colorado","region":"8"},
		"Commonwealth of the Northern Mariana Islands":{"state":"Commonwealth of the Northern Mariana Islands","region":"9"},
		"Connecticut":{"state":"Connecticut","region":"1"},
		"Delaware":{"state":"Delaware","region":"3"},
		"District of Columbia":{"state":"District of Columbia","region":"6"},
		"Federated States of Micronesia":{"state":"Florida","region":"4"},
		"Florida":{"state":"Florida","region":"4"},
		"Georgia":{"state":"Georgia","region":"4"},
		"Guam":{"state":"Guam","region":"9"},
		"Hawaii":{"state":"Hawaii","region":"9"},
		"Idaho":{"state":"Idaho","region":"10"},
		"Illinois":{"state":"Illinois","region":"5"},
		"Indiana":{"state":"Indiana","region":"5"},
		"Iowa":{"state":"Iowa","region":"7"},
		"Kansas":{"state":"Kansas","region":"7"},
		"Kentucky":{"state":"Kentucky","region":"4"},
		"Louisiana":{"state":"Louisiana","region":"6"},
		"Maine":{"state":"Maine","region":"1"},
		"Maryland":{"state":"Maryland","region":"3"},
		"Massachusetts":{"state":"Massachusetts","region":"1"},
		"Michigan":{"state":"Michigan","region":"5"},
		"Minnesota":{"state":"Minnesota","region":"5"},
		"Mississippi":{"state":"Mississippi","region":"4"},
		"Missouri":{"state":"Missouri","region":"7"},
		"Montana":{"state":"Montana","region":"8"},
		"Nebraska":{"state":"Nebraska","region":"7"},
		"Nevada":{"state":"Nevada","region":"9"},
		"New Hampshire":{"state":"New Hampshire","region":"1"},
		"New Jersey":{"state":"New Jersey","region":"2"},
		"New Mexico":{"state":"New Mexico","region":"6"},
		"New York":{"state":"New York","region":"2"},
		"North Carolina":{"state":"North Carolina","region":"4"},
		"North Dakota":{"state":"North Dakota","region":"8"},
		"Ohio":{"state":"Ohio","region":"5"},
		"Oklahoma":{"state":"Oklahoma","region":"6"},
		"Oregon":{"state":"Oregon","region":"10"},
		"Pennsylvania":{"state":"Pennsylvania","region":"3"},
		"Puerto Rico":{"state":"Puerto Rico","region":"2"},
		"Rhode Island":{"state":"Rhode Island","region":"1"},
		"South Carolina":{"state":"South Carolina","region":"4"},
		"South Dakota":{"state":"South Dakota","region":"8"},
		"Tennessee":{"state":"Tennessee","region":"4"},
		"Texas":{"state":"Texas","region":"6"},
		"U.S. Virgin Islands":{"state":"U.S. Virgin Islands","region":"2"},
		"Utah":{"state":"Utah","region":"8"},
		"Vermont":{"state":"Vermont","region":"1"},
		"Virginia":{"state":"Virginia","region":"3"},
		"Washington":{"state":"Washington","region":"10"},
		"West Virginia":{"state":"West Virginia","region":"3"},
		"Wisconsin":{"state":"Wisconsin","region":"5"},
		"Wyoming":{"state":"Wyoming","region":"8"}
		};
	
	return state;
}`,
})
