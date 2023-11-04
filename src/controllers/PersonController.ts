import { Logger } from "@/config/types/LoggerTypes";
import { BaseController } from "./BaseController";
import { Person, PersonType } from "@/entities/Person";
import { createRules } from '@/validations/PersonValidation'
import Validator from "@/config/libs/Validator";

type constructorType = {
  logger: Logger,
  validator: Validator,
}  
export default class PersonController extends BaseController{
  protected name = 'PersonController'
  protected validator: Validator
  protected logger: Logger
  protected person: Person|undefined; 

  constructor({ logger, validator }:constructorType){ 
    super(logger)
    this.logger = logger
    this.validator = validator
  }
 
  create(person:PersonType):PersonType {
    this.logger.info('create person init', person)
    const { data } = this.validator.rules(createRules).validate(person)
    this.logger.info(data)

    this.person = new Person(data) 
    if( this.person.isCnpj() )
      this.logger.info('Empresa')
    else
      this.logger.info('Pessoa fisica')

    return this.person.input
  }
}