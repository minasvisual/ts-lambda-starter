import { z } from "zod"

export interface ValidatorContract { 
  validate: (payload?: object) => void;
}