const activityBase = 'http://www.boredapi.com/api/activity?';

export const getActivity = (withOthers, type) => {
  const numPeople = withOthers ? `minparticipants=2&maxparticipants=8&` : '';
  const activityType = type ? `type=${type}` : '';
  return fetch(`${activityBase}${numPeople}${activityType}`)
    .then(response => {
			if (response.ok) {
				return response.json()
			} else {
				throw response
			}
		});
}