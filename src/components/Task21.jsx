import React from "react";
import "antd/dist/antd.css";
import { TreeSelect } from "antd";
import { saveLocation } from "../actions/action-creators";
import { connect } from "react-redux";

const TreeNode = TreeSelect.TreeNode;

class Task21 extends React.Component {
  state = {
    value: undefined
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
    this.props.dispatchSaveSelectedLocation(value);
  };

  render() {
    return (
      <TreeSelect
        showSearch
        style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={this.onChange}
      >
        <TreeNode value="Countries" title="Countries" key="0-1">
          <TreeNode value="USA" title="Azerbaijan" key="0-1-1">
            <TreeNode value="Baku" title="Baku" key="random" />
            <TreeNode value="Balakan" title="Balakan" key="random1" />
          </TreeNode>
          <TreeNode value="USA" title="USA" key="0-1-1">
            <TreeNode value="NY" title="NY" key="random" />
            <TreeNode value="LA" title="LA" key="random1" />
          </TreeNode>
          <TreeNode value="Turkey" title="Turkey" key="0-1-1">
            <TreeNode value="İstanbul" title="İstanbul" key="random" />
            <TreeNode value="Ankara" title="Ankara" key="random1" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSaveSelectedLocation(location) {
    dispatch(saveLocation(location));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Task21);
