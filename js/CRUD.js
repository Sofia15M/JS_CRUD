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
    
    #save() {
        let dataToSave = JSON.stringify(this.#data);
        sessionStorage.setItem(this.#crudsofi, dataToSave);
    }

    #get(key){
        let data = sessionStorage.getItem(key);
        return JSON.parse(data);
    }

    #existElementWithId(id){
        return this.#data[id] === undefined ? false : true;
    }

    #chackThatElementExitWithId (id){
        if (!this.#existElementWithId(id))
           throw new Error("this element not exists")
    }

    create(data){
        this.#data.push(data);
        return this.#data.length;
    }

	read(id){
        return this.#data[id];
    }

    readAll(){
        return this.#data;
    }

	update(id, data){
        this.#data[id] = data;
        return true;
    }

	delete(id){
       this.#data.splice(id,1);
       return true; 
    }
}