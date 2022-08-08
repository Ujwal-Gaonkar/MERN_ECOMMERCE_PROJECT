class ApiFeatures {
    constructor(query,queryStr){
        // query product.find()   queryStr category eg: keyword = "laptop"
        this.query = query;
        this.queryStr=queryStr;
    }

    search(){
       const keyword = this.queryStr.keyword? {
            name:{
                $regex:this.queryStr.keyword,
                //i for case insensitive
                $options:"i",
            },
       }:{};
       this.query = this.query.find({...keyword});

       return this;//returning same class
    }

    filter(){
        const queryCopy ={...this.queryStr};
        //Removing some fields for category
        const removefields = ["keyword","page","limit"];
        removefields.forEach((key)=>delete queryCopy[key]);

        //Filter for Price and rating
       // console.log(queryCopy);
        let queryStr =JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,key=>`$${key}`);
       // console.log(queryStr);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage *(currentPage-1);
        this.query = this.query.limit(resultPerPage).skip(skip)
        return this;
    }
};

module.exports = ApiFeatures; 