const clientId = 'ELxEdFBhtILZnRuOb0lfPg';
const secret = 'QR5kdrwVYd0IrzUUimSSrOnBJDc2UW2dcHKfMdxAGC92rGuR5yrHQKq2G0oPr2ty';

let accessToken;

export const Yelp = {
	getAccessToken(){
		if(accessToken){
			return new Promise(resolve =>resolve(accessToken));
			}
		}
		
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}` 
		,{method: 'POST'}
		).then(response => {
				return response.json();
			}).then(jsonResponse => accessToken = jsonResponse.access_token);
			

	search(term, location, sortBy){
		Yelp.getAccessToken().then(()=>{
			return fetch(`'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}'`, 
			{
					headers: {
						Authorization: `Bearer ${accessToken}`
					}

		}).then(response => {
				return response.json();
			}).then(jsonResponse=>{
				if(jsonResponse.businesses){
					return jsonResponse.businesses.map(business =>({
							id: business.id,
							imageSrc: business.image_url,
							name: business.name,
							address: business.address,
							city: business.city,
							state: business.state,
							zipCode: business.zipCode,
							category: business.category,
							rating: business.rating,
							reviewCount: business.review_count
											}));
				}
			});
		});
	}
		
export default {Yelp}