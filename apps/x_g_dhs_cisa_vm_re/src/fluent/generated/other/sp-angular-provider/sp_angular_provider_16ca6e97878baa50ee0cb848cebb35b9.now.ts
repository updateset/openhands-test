import { SPAngularProvider } from '@servicenow/sdk/core'

SPAngularProvider({
    $id: Now.ID['16ca6e97878baa50ee0cb848cebb35b9'],
    name: 'rscCyhyIpVal',
    type: 'factory',
    script: `function rscCyhyIpVal() {
	var obj = {};

	function isValidIPv4Input(input) {
		function parseIPv4(ip) {
			ip = String(ip).trim();
			var m = ip.match(/^(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$/);
			if (!m) return null;
			var o1 = +m[1], o2 = +m[2], o3 = +m[3], o4 = +m[4];
			if (o1 > 255 || o2 > 255 || o3 > 255 || o4 > 255) return null;
			return (((o1 << 24) >>> 0) + (o2 << 16) + (o3 << 8) + o4) >>> 0;
		}

		function isValidSingle(ipStr) {
			return parseIPv4(ipStr) !== null ? { valid: true, type: "Single" } : { valid: false, error: "Invalid IPv4 address", type: "CIDR" };
		}

		function isValidRange(rangeStr) {
			var parts = String(rangeStr).split("-");
			if (parts.length !== 2) return { valid: false, error: "Invalid range format", type: "Range" };
			var start = parseIPv4(parts[0]);
			var end = parseIPv4(parts[1]);
			if (start === null || end === null) return { valid: false, error: "Invalid IPv4 address in range", type: "Range" };
			if (start > end) return { valid: false, error: "Range start is greater than range end", type: "Range" };
			return { valid: true, type: "Range" };
		}

		function isValidCIDR(cidrStr) {
			var m = String(cidrStr).match(/^(.+)\\/(\\d{1,2})$/);
			if (!m) return { valid: false, error: "Invalid CIDR format", type: "CIDR" };
			var ipStr = m[1].trim();
			var pfx = +m[2];
			if (pfx < 0 || pfx > 32) return { valid: false, error: "Invalid CIDR prefix length", type: "CIDR" };
			var ip = parseIPv4(ipStr);
			if (ip === null) return { valid: false, error: "Invalid IPv4 address in CIDR", type: "CIDR" };

			var mask = pfx === 0 ? 0 : ((0xFFFFFFFF << (32 - pfx)) >>> 0);
			if ((ip & (~mask >>> 0)) !== 0) return { valid: false, error: "CIDR IP is not network aligned", type: "CIDR" };

			return { valid: true, type: "CIDR" };
		}

		input = String(input).trim();

		var result;
		if (input.indexOf("/") !== -1) {
			result = isValidCIDR(input);
		} else if (input.indexOf("-") !== -1) {
			result = isValidRange(input.replace(/\\s*-\\s*/, "-"));
		} else {
			result = isValidSingle(input);
		}

		return {
			token: input,
			type: result.type,
			valid: result.valid,
			reason: result.valid ? "" : result.error
		};
	}

	/* ---------- 4. Public helper ---------- */
	obj.validateIpArray = function (arr) {
		return arr.map(token => isValidIPv4Input(token));
	};

	obj.csvMap = function (arr) {
		return arr.map(item => [
			item.token,
			item.valid ? "" : (item.reason || "")
		]);
	};

	obj.arrayToCsv = function (arr) {
		return arr.map(row =>
			row.map(String)
				.join(',')
		).join('\\r\\n');
	};

	return obj;
}`,
})
