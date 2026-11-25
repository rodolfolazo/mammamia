class Data {
    setToken(token) {
        localStorage.setItem('token', token)
    }

    getToken() {
        return localStorage.getItem('token')
    }

    removeToken() {
        localStorage.removeItem('token')
    }
}

// instance

export const data = new Data()
