import React, {Component} from "react"
import FontAwesome from "react-fontawesome"
import PlacesAutocomplete from "react-places-autocomplete"


class ContactUsForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countryValue: "",
      cityValue: "",
      locationPlaceholder: "País y/o ciudad"
    }

    this.handleCountryChange = this.handleCountryChange.bind(this)
  }

  handleCountryChange(country) {
    this.setState({
      countryValue: country
    })
  }

  render() {
    const {countryValue, locationPlaceholder} = this.state
    const countryInputClassNames = {
      root: "cuf__country-container",
      input: "cuf__country-input form-control",
    }

    return (
      <div className={this.props.className}>
        <div className="container">
          <div className="cuf__row row">
            <div className="cuf__col contact-info col-12 col-sm align-self-center">
              <p className="cuf__title">Contáctenos:</p>
              <p>
                <FontAwesome className="icon" name="map-marker-alt" />
                &nbsp;
                <span className="text">Calle 36 No. 4-28 B/. Santander</span>
              </p>
              <p>
                <FontAwesome className="icon" name="phone" />
                &nbsp;
                <span className="text">(+57) 316-5277745, (+57) 316-6908195</span>
              </p>
              <p>
                <FontAwesome className="icon" name="envelope" />
                &nbsp;
                <span className="text">ventas@tensodert.com.co</span>
              </p>
            </div>
            <div className="cuf__col form-col col-12 col-sm">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Su nombre y apellido" />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesome name="user" />
                  </div>
                </div>
              </div>
              <div className="separator"/>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Teléfono fijo y/o celular" />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesome name="phone" />
                  </div>
                </div>
              </div>
              <div className="separator"/>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico" />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesome name="envelope" />
                  </div>
                </div>
              </div>
              <div className="separator"/>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Empresa" />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesome name="building" />
                  </div>
                </div>
              </div>
              <div className="separator"/>
              <div className="input-group">
                <PlacesAutocomplete
                  classNames={countryInputClassNames}
                  inputProps={{
                    value: countryValue,
                    onChange: this.handleCountryChange,
                    placeholder: locationPlaceholder
                  }} />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesome name="map" />
                  </div>
                </div>
              </div>
              <div className="separator"/>
              <div className="cuf__distributor-container form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="cuf-distributor"
                  value="true" />
                <label
                  className="form-check-label"
                  htmlFor="cuf-distributor">¿Quiere ser distribuidor?</label>
              </div>
              <div className="separator"/>
              <textarea
                className="form-control"
                placeholder="Mensaje (opcional)"
                rows="3"></textarea>
              <div className="separator"/>
              <button
                type="button"
                className="cuf__send-form-btn btn">Enviar email de contacto</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactUsForm