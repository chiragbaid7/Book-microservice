const HTTP_CODES = {
  OK: 200,
  INTERNAL_SERVER: 500,
  BAD_REQUEST: 400,
  UNPROCESSABLE_ENTITY: 422,
  NOT_FOUND:404,
  Unauthorized:401,
}

class BaseError extends Error{
    constructor(name,statuscode,description){
        super(description)
        this.name=name;
        this.statuscode=statuscode;
        this.description=description;
        Error.captureStackTrace(Error);
    }
}

class Unauthorized extends BaseError {
    constructor(description,name,statuscode=HTTP_CODES.Unauthorized){
        super(name="Unauthorized",statuscode,description=description)
    }
}

class BadRequest extends BaseError {
    constructor(description,name,statuscode=HTTP_CODES.BAD_REQUEST){
        super(name='BAD Request',statuscode,description=description)
    }
}

class NotFound extends BaseError {
    constructor(description,name,statuscode=HTTP_CODES.NOT_FOUND){
        super(name='Not Found',statuscode,description=description)
    }
}

class INTERNAL extends BaseError {
    constructor(description,name,statuscode=HTTP_CODES.INTERNAL_SERVER){
        super(name='Internel Server Error',statuscode,description='Something Went Wrong')
    }
}

module.exports={
    Unauthorized,BadRequest,NotFound,INTERNAL,BaseError
}