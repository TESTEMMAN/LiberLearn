
async function getModuleIdFromSlug(slug) {
	try {
		const response = await fetch('https://liberlearn-backend.up.railway.app/api/courses');
		const data = await response.json();

		const slugToIdMap = data.reduce((map, module) => {
			map[module.slug] = module.id;
			return map;
		}, {});

		return slugToIdMap[slug] || null;
	} catch (error) {
		console.error('Error fetching module details:', error);
		return null;
	}
}
export default getModuleIdFromSlug;
