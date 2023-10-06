export class CRUD{
	#crudsofi = null;
    #data = null;
  
	constructor(crudsofi){
 		this.#setcrudsofi(crudsofi);
      	this.#setData();
  	}

	#setcrudsofi(crudsofi){
		this.#crudsofiValidate(crudsofi);
        this.#crudsofi = crudsofi;
	}
    
    #setData(){
    	this.#data = [];
	}
    
    #crudsofiValidate(crudsofi){
		if(crudsofi == undefined) throw new Error("Table crudsofi required");
	}
    
    create(data){
        this.#data.push(data);
        return this.#data.length;
    }

	read(id){}

	update(id, data){}

	delete(id){}
}