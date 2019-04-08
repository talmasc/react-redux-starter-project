import React from "react";

class ListingsPage extends React.Component {
  state = {
    listing: {
      title: ""
    }
  };

  handleChange = event => {
    const listing = { ...this.state.listing, title: event.target.value };
    this.setState({ listing });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.listing.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Listings</h2>
        <h3>Add Listing</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.listing.title}
        />

        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default ListingsPage;
