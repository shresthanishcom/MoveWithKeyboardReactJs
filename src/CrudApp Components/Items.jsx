import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { Component } from "react";

// this is made by anish shrestha with his logic
// this can be used for future work where we have to do delete actions from keyboard
// the logic contains reusable functions and for later paginations we can do simple math and give them as parameter

export default class Items extends Component {
  constructor(props) {
    super(props);

    //id is used for lists id, lists are the arrrays for collection of id and name,inputname for string input
    //highlight is used to highlight the table row on click or on key press

    this.state = {
      id: 0,
      lists: [],
      inputName: "",
      hightlight: 0,
    };
  }

  //handle submit for adding new name and id in state lists
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      lists: [
        ...this.state.lists,
        {
          id: this.state.id + 1,
          name: this.state.inputName,
        },
      ],
      id: this.state.id + 1,
      inputName: "",
    });
  }

  // highlighting element row
  handleHighlight(e, hId) {
    this.setState({
      ...this.state,
      hightlight: hId,
    });
  }

  handleInput(e) {
    this.setState({
      ...this.state,
      inputName: e.target.value,
    });
  }

  //for deleting this is called
  handleBtn(id) {
    this.setState({
      ...this.state,
      lists: this.state.lists.filter((item) => {
        if (item.id !== id) {
          return item;
        } else {
          return null;
        }
      }),
    });
  }

  handleKeyPress(e) {
    //the whole thing is index as started from 0 and highlight moves on that with +1 or -1
    //for later on the index can be multiplied with pagination number and index of array can
    //be obtained. as the whole things runs in index and the value from that index to  lists

    if (e.key === "ArrowUp") {
      if (this.state.hightlight !== 0) {
        this.setState({ ...this.state, hightlight: this.state.hightlight - 1 });
      }
    } else if (e.key === "ArrowDown") {
      if (this.state.hightlight < this.state.lists.length - 1) {
        this.setState({ ...this.state, hightlight: this.state.hightlight + 1 });
      }
    } else if (e.key === "Delete") {
      this.handleBtn(this.state.lists[this.state.hightlight].id);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div tabIndex={1} onKeyDown={(e) => this.handleKeyPress(e)}>
          <form
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <div className="h2">Add new person</div>
            <input
              onChange={(e) => this.handleInput(e)}
              value={this.state.inputName}
              type="text"
            />
            <button className="btn-warning m-4">Submit</button>
          </form>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sn</th>
                <th scope="col">Name</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody style={{ height: "300px", overflow: "scroll" }}>
              {this.state.lists.map((item, index) => {
                return (
                  <tr
                    key={index}
                    style={
                      index === this.state.hightlight
                        ? { backgroundColor: "#d4c7b0" }
                        : {}
                    }
                  >
                    <td>{item.id}</td>
                    <td
                      onClick={(e) => {
                        this.handleHighlight(e, index);
                      }}
                    >
                      {item.name}
                    </td>
                    <td>
                      <button
                        name="delete"
                        onClick={() => this.handleBtn(item.id)}
                        className="btn-danger mr-3"
                      >
                        Delete
                      </button>
                      <button
                        name="edit"
                        onClick={this.handleBtn}
                        className="btn-primary"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
