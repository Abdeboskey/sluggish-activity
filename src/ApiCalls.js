const activityBase = 'http://www.boredapi.com/api/activity?'

export const getActivity = (participants, type) => {
  const numPeople = participants ? `participants=${participants}&` : '';
  const activityType = type ? `type=${type}` : '';
  fetch(`activityBase${numPeople}${activityType}`)
    .then(response => {
			if (response.ok) {
				return response.json()
			} else {
				throw response
			}
		})
}