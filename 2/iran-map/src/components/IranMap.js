import React from "react";

import "./IranMap.css";

import CityModal from "./CityModal";

class IranMap extends React.Component {
  state = {
    city: null,
    citiesData: null,
    selectedCity: null,
    isModalOpen: false,
  };

  componentDidMount() {
    const citiesData = this.state.citiesData;
    fetch("http://localhost:9000/cities/")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ citiesData: json });
      });
  }
  cityClicked = (id) => (event) => {
    event.preventDefault();
    let selectedCity = this.state.selectedCity;
    let isModalOpen = true;

    fetch(`http://localhost:9000/cities/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ city: json });
      });

    console.log(id);
    selectedCity = id;
    this.setState({ selectedCity, isModalOpen });

    // Fetch city details and open modal
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    return (
      <div>
        <div className="map-container">
          {(this.state.citiesData || []).map((record) => (
            <div
              key={record.id}
              className="city-name"
              style={{
                top: `${record.top}%`,
                left: `${record.left}%`,
              }}
              onClick={this.cityClicked(record.id)}
            >
              {record.name}
            </div>
          ))}
        </div>
        <CityModal
          city={this.state.citiesData}
          isOpen={this.state.isModalOpen}
          onClose={this.closeModal}
        />
      </div>
    );
  }
}

export default IranMap;
