const student ={
    name: "prakash",
    age: 22,
    eng: 78,
    math:78,
    phy:89,
    getAvg(){
        console.log(this.name);
        let avg =(this.eng+this.math+this.phy)/3;
        console.log(`${this.name}got avg marks =${avg}`);
    }
}