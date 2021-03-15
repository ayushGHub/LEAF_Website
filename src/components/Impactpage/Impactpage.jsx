import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Impactpage.css';

const Impactpage = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibGVhZi1wcm9qZWN0IiwiYSI6ImNraDBwbjJyMjA2czEyeHFmMnM3cTcwcG4ifQ.90P337i9nUWsItfBcKs2Ag';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [85.158875, 25.612677],
        zoom: 7,
      });
      new mapboxgl.Marker()
        .setLngLat([85.904179, 26.171548])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h4>Government School 1</h4>`
          )
        )
        .addTo(map);

      new mapboxgl.Marker()
        .setLngLat([85.227807, 25.597334])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h4>Government School 2</h4>`
          )
        )
        .addTo(map);

      map.on('load', () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);
  const data = [
    { description: 'Years Experience', icon: 'fas fa-chart-bar', counter: 22 },
    { description: 'Projects Done', icon: 'fab fa-codepen', counter: 22 },
    { description: 'Awards Received', icon: 'fas fa-trophy', counter: 22 },
    { description: 'Happy Clients', icon: 'fas fa-users', counter: 22 },
  ];
  return (
    <div className='imapact'>
      <section className='testMapsWrapper'>
        <section id='testimonials'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-sm-4 wow slideInLeft'>
                <div className='vertical-heading'>
                  <h5>Find Us</h5>
                  <h2>
                    Adopted <br />
                    <strong>Schools</strong>
                  </h2>
                </div>
              </div>
              <div
                ref={(el) => (mapContainer.current = el)}
                className='col-md-8 map__box'
              />
            </div>
          </div>
        </section>
      </section>
      <section id='stats'>
        <div className='content-box-md'>
          <div className='container'>
            <div className='row'>
              {data.map((x) => (
                <div className='col-md-3 col-sm-3 col-xs-6'>
                  <div className='stats-item text-center'>
                    <i className={x.icon}></i>
                    <h3 className='counter'>{x.counter}</h3>
                    <p>{x.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impactpage;
