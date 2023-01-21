import {Environment,SandboxEnvArr} from "../../config/env";

const Colors = {
  PrimaryColor: "#1d6998",
}

if(SandboxEnvArr.indexOf(Environment) !== -1){
  Colors.PrimaryColor = "#22aaa1";
}

export default Colors;