const Dragon = require('../dragon')
const {REFRESH_RATE, SECOND} = require('../config')

const refreshRate = REFRESH_RATE * SECOND
class Index {
    constructor() {
        this.expiration = this.calculateExpiration()
        this.generationId = undefined
    }

    calculateExpiration () {
        const expirationPeriod = Math.floor(Math.random() * (refreshRate/2))

        const msUntilExpiration = Math.random() < 0.5 ?
            refreshRate - expirationPeriod :
            refreshRate + expirationPeriod;

        return new Date(Date.now() + msUntilExpiration)
    }

    newDragon () {
        if(Date.now() > this.expiration) {
            throw new Error(`This generation has been expired on ${this.expiration}`)
        }
        return new Dragon({generationId: this.generationId})
    }
}

module.exports = Index
