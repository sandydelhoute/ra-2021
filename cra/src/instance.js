 class instance{
    name='React Advanced 2021';
    _countIndex = 0;
    updateCounter(value){
        this.count = value
    }
    get CountIndex(){
        return this.count;
    }
    set CountIndex(value){
        this.count = value;
    }

}
export default new instance();