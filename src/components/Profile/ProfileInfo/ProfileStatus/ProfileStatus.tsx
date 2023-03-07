import React from "react";

interface statusProps {
  status:string
}


export class ProfileStatus extends React.Component<statusProps> {

  state = {
    editMode:false
  }

  activateEditMode (){
    this.setState({
      editMode:true
    })
  }

  deactivateEditMode (){
    this.setState({
      editMode:false
    })
  }





  render() {
    return (
      <div>
        {!this.state.editMode ?
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
          </div>
          :
          <div>
            <input onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} autoFocus={true}/>
          </div>
        }
      </div>
    );
  }
}
