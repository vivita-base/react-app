const {EnvironmentEnum,SandboxEnvArr} = require('../enums/environment');

let env = EnvironmentEnum.Local;

if(process.env.REACT_APP_ENV !== undefined){
  if(process.env.REACT_APP_ENV in EnvironmentEnum){
    env = EnvironmentEnum[process.env.REACT_APP_ENV]
  }
}

const Environment = env;

module.exports = {Environment,EnvironmentEnum,SandboxEnvArr};