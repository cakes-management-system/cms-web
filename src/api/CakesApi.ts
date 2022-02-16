const CAKES_SERVICE_BASE_URL = 'http://localhost:8080'
const API_V1 = '/api/v1'

export const CAKES_URL = `${CAKES_SERVICE_BASE_URL}${API_V1}/cakes`
export const CAKE_IMAGE_URL = (id: number) => `${CAKES_URL}/${id}/image`