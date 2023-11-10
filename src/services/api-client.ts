import axios from "axios";

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '06f5f386fefc47d88bdb3edb963a7df1'
	}
})