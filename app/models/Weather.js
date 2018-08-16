export default class Weather {
    constructor(data) {
        this.temp = 9 / 5 * (data.main.temp - 273) + 32
    }

    // getFah() {
    //     return 9 / 5 * (this.temp - 273) + 32
    // }
}