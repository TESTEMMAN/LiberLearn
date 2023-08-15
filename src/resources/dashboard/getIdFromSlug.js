
async function getIdFromSlug(slug) {
	try {
		const response = await fetch('https://liberlearn-backend.up.railway.app/api/subjects');
		const data = await response.json();

		const slugToIdMap = data.reduce((map, course) => {
			map[course.slug] = course.id;
			return map;
		}, {});

		return slugToIdMap[slug] || null;
	} catch (error) {
		console.error('Error fetching course details:', error);
		return null;
	}
}
export default getIdFromSlug;
