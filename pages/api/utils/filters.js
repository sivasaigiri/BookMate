import database from '../../../utils/database';

const fetchfilters = async (req, res) => {
	const filters = await datation('utils').findOne({name: "filters"}));
	res.status(200).json(filters.payload);
}

export default fetchfilters;
