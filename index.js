class Paginator {
    constructor(data,itemsperpage){
        this._data=data;
        this._itemsperpage=itemsperpage;
        this.dataarr=[];
        this.currentpage=0;
        for (let i = 0; i < this._data.length - 1; i += this._itemsperpage) {
            this.dataarr.push(this._data.slice(i, i + this._itemsperpage))
        }

    }
    page(number){
        return this.dataarr[number]
    }
    lastPage(){
        return  dataarr[this.dataarr.length-1]
    }
    firstPage(){
        return this.dataarr[0]
 }
nextpage(){
     return ++this.currentpage
}
previouspage(){ 
    return --this.currentpage
}
pages(){
    return this.dataarr.length
}
currentpage(){
    this.dataarr[this.currentpage]
}
get itemsperpage(){
    return this._itemsperpage
}

get data(){
    return this._data
}
set itemsperpage(number){
return this._itemsperpage=number
}
set data(data){
return this._data=data

}
}