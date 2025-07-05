import database from '../../../utils/database';

const fetchfilters = async (req, res) => {
	const filters = await datation('utils').findOne({name: "filters"}));
	
}

export default fetchfilters;
