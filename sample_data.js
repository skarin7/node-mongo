class Sample {
    constructor(name, age) {
        this.Name = name;
        this.age = age;
        this.samples = [];
        this.samples.push({"name" : this.Name, "age": this.age});
    }
    getAllSamples() {
        return this.samples;
    }
    fillSamples(nameToAge) {
        nameToAge.forEach(item => {
            this.samples.push({'name': item.name, 'age': item.age});
        });
    }

}  

module.exports = new Sample();