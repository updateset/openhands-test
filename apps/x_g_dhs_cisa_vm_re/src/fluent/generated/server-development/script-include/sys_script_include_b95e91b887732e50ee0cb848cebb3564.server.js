var rscUSGS = Class.create();
rscUSGS.prototype = {
    initialize: function() {

		this.GNISURL = 'https://carto.nationalmap.gov/arcgis/rest/services/geonames/MapServer/3/query';

		this.FIPSURL = 'https://carto.nationalmap.gov/arcgis/rest/services/govunits/MapServer/23/query';
		
		this.STATES = {
			"ALABAMA":        { abbr: "AL", code: "01" },
			"ALASKA":         { abbr: "AK", code: "02" },
			"AMERICAN SAMOA": { abbr: "AS", code: "60" },
			"ARIZONA":        { abbr: "AZ", code: "04" },	
			"ARKANSAS":       { abbr: "AR", code: "05" },
			"CALIFORNIA":     { abbr: "CA", code: "06" },
			"COLORADO":       { abbr: "CO", code: "08" },
			"CONNECTICUT":    { abbr: "CT", code: "09" },
			"DELAWARE":       { abbr: "DE", code: "10" },
			"DISTRICT OF COLUMBIA": { abbr: "DC", code: "11" },
			"FEDERATED STATES OF MICRONESIA": { abbr: "FM", code: "64" }, 
			"FLORIDA":        { abbr: "FL", code: "12" },
			"GEORGIA":        { abbr: "GA", code: "13" },
			"GUAM":           { abbr: "GU", code: "66" },
			"HAWAII":         { abbr: "HI", code: "15" },
			"IDAHO":          { abbr: "ID", code: "16" },
			"ILLINOIS":       { abbr: "IL", code: "17" },
			"INDIANA":        { abbr: "IN", code: "18" },
			"IOWA":           { abbr: "IA", code: "19" },
			"KANSAS":         { abbr: "KS", code: "20" },
			"KENTUCKY":       { abbr: "KY", code: "21" },
			"LOUISIANA":      { abbr: "LA", code: "22" },
			"MAINE":          { abbr: "ME", code: "23" },
			"MARSHALL ISLANDS": { abbr: "MH", code: "68" },
			"MARYLAND":       { abbr: "MD", code: "24" },
			"MASSACHUSETTS":  { abbr: "MA", code: "25" },
			"MICHIGAN":       { abbr: "MI", code: "26" },
			"MINNESOTA":      { abbr: "MN", code: "27" },
			"MISSISSIPPI":    { abbr: "MS", code: "28" },
			"MISSOURI":       { abbr: "MO", code: "29" },
			"MONTANA":        { abbr: "MT", code: "30" },
			"NEBRASKA":       { abbr: "NE", code: "31" },
			"NEVADA":         { abbr: "NV", code: "32" },
			"NEW HAMPSHIRE":  { abbr: "NH", code: "33" },
			"NEW JERSEY":     { abbr: "NJ", code: "34" },
			"NEW MEXICO":     { abbr: "NM", code: "35" },
			"NEW YORK":       { abbr: "NY", code: "36" },
			"NORTH CAROLINA": { abbr: "NC", code: "37" },
			"NORTH DAKOTA":   { abbr: "ND", code: "38" },
			"NORTHERN MARIANA ISLANDS": { abbr: "MP", code: "69" },
			"OHIO":           { abbr: "OH", code: "39" },
			"OKLAHOMA":       { abbr: "OK", code: "40" },
			"OREGON":         { abbr: "OR", code: "41" },
			"PENNSYLVANIA":   { abbr: "PA", code: "42" },
			"PUERTO RICO":    { abbr: "PR", code: "72" },
			"RHODE ISLAND":   { abbr: "RI", code: "44" },
			"SOUTH CAROLINA": { abbr: "SC", code: "45" },
			"SOUTH DAKOTA":   { abbr: "SD", code: "46" },
			"TENNESSEE":      { abbr: "TN", code: "47" },
			"TEXAS":          { abbr: "TX", code: "48" },
			"U.S. VIRGIN ISLANDS": { abbr: "VI", code: "78" },
			"UTAH":           { abbr: "UT", code: "49" },
			"VERMONT":        { abbr: "VT", code: "50" },
			"VIRGINIA":       { abbr: "VA", code: "51" },
			"WASHINGTON":     { abbr: "WA", code: "53" },
			"WEST VIRGINIA":  { abbr: "WV", code: "54" },
			"WISCONSIN":      { abbr: "WI", code: "55" },
			"WYOMING":        { abbr: "WY", code: "56" },	
			};
	},

	getDetails: function(city, state, county){

		if(gs.getProperty('x_g_dhs_cisa_vm_re.usgs_api_active') === 'false'){
			return {
				gnis_location : "0",
				county_fips : "0",
				state_fips : "0"				
			};
		}

		city = city.toUpperCase();
		state = state.toUpperCase();
		county = county.toUpperCase();

		var result = {
			gnis_location : this._gnisLookup(city, state, county),
			county_fips : this._fipsLookup(state, county),
			state_fips : this.STATES[state] ? this.STATES[state].code : "0"
		};

		return result;
	},

    _gnisLookup: function(city, state, county) {
        try {
			if(!this.STATES[state]){
				return "0";
			}
			//+AND+UPPER(county_name)%3D%27"+county+"%27
            var qs = ("?f=json&returnGeometry=false&where=UPPER(gaz_name)%3D%27"+city+"%27+AND+state_alpha%3D%27"+this.STATES[state].abbr+"%27&outFields=gaz_id%2Cgaz_name%2Cstate_alpha%2Ccounty_name").replaceAll(' ', '+');

            var r = new sn_ws.RESTMessageV2();
            r.setHttpMethod('get');
            r.setEndpoint(this.GNISURL + qs);
            r.setRequestHeader('Accept', 'application/json');

            var response = r.execute();
            var result = JSON.parse(response.getBody());
            var httpStatus = response.getStatusCode();

            if (httpStatus === 200 && Array.isArray(result.features) && result.features.length > 0)
                return result.features[0].attributes.gaz_id;

            return "0";
        } catch (ex) {
            gs.error('RSC GNIS ERROR - Unable to retrieve GNIS, ' + ex);
			return "0";
        }
    },

    _fipsLookup: function(state, county) {
        try {
			if(!this.STATES[state]){
				return "0";
			}

            var qs = ("?f=json&returnGeometry=false&where=UPPER(COUNTY_NAME)%3D%27"+county+"%27+AND+STATE_FIPSCODE%3D%27"+this.STATES[state].code+"%27+AND+FCODE%3D61200&outFields=COUNTY_FIPSCODE").replaceAll(' ', '+');

            var r = new sn_ws.RESTMessageV2();
            r.setHttpMethod('get');
            r.setEndpoint(this.FIPSURL + qs);
            r.setRequestHeader('Accept', 'application/json');

            var response = r.execute();
            var result = JSON.parse(response.getBody());
            var httpStatus = response.getStatusCode();
            
            if (httpStatus === 200 && Array.isArray(result.features) && result.features.length > 0)
                return result.features[0].attributes['county_fipscode'];

            return "0";
        } catch (ex) {
            gs.error('RSC GNIS ERROR - Unable to retrieve FIPS, ' + ex);
			return "0";
        }
    },

    type: 'rscUSGS'
};