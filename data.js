var APP_DATA = {
  "scenes": [
    {
      "id": "0-tcd---simon-perry-building",
      "name": "TCD - Simon Perry Building",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.07729283884965454,
        "pitch": 0.14087560320747805,
        "fov": 1.3564874733007806
      },
      "linkHotspots": [
        {
          "yaw": 0.015746784047268036,
          "pitch": 0.22387526715522554,
          "rotation": 0,
          "target": "1-turbine-test-rig"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.06772588801982238,
          "pitch": 0.1282770655933163,
          "title": "Department of Civil, Structural &amp; Environmental Engineering",
          "text": "TCD - Simon Perry Building"
        },
        {
          "yaw": -0.8080553349833526,
          "pitch": 0.3187596649528608,
          "title": "College Park",
          "text": "Rugby Pitch"
        },
        {
          "yaw": -2.0963313672403032,
          "pitch": -0.1272232966399809,
          "title": "Department of Civil, Structural &amp; Environmental Engineering",
          "text": "TCD - Museum Building"
        },
        {
          "yaw": 2.790884174971483,
          "pitch": -0.08703618993945028,
          "title": "College Park",
          "text": "Football and Cricket Pitch"
        },
        {
          "yaw": 0.1565661079051246,
          "pitch": -0.00543252987239029,
          "title": "Business School",
          "text": "TCD"
        },
        {
          "yaw": 0.34572863970783985,
          "pitch": 0.17629708961022317,
          "title": "<span style=\"font-size: 13px; background-color: rgba(58, 68, 84, 0.8);\">Department of Botany</span>",
          "text": "TCD"
        }
      ]
    },
    {
      "id": "1-turbine-test-rig",
      "name": "Turbine Test Rig",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.02500959216387244,
        "pitch": 0.1250168106746159,
        "fov": 1.3564874733007806
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 0.3305593410267811,
          "pitch": -0.4540269991164738,
          "title": "Flowmeter",
          "text": "The flowmeter in the test rig accurately measures the volume of water supplied to the turbine, providing real-time data on flow rate. This information is crucial for monitoring and adjusting flow conditions to meet specific testing requirements, ensuring consistent performance and reliable data collection throughout the experiment."
        },
        {
          "yaw": -0.8217145815835352,
          "pitch": 0.7882185652653337,
          "title": "Supply Pump: 1",
          "text": "This pump delivers a maximum flow rate of 34 litres per second and a head of up to 60 metres, providing reliable and efficient performance for experimental setups requiring controlled, high-capacity water flow."
        },
        {
          "yaw": 0.37163983152107605,
          "pitch": 0.784833021023104,
          "title": "Data Acquisition Centre",
          "text": "DAQs, PC"
        },
        {
          "yaw": -0.35314739744433155,
          "pitch": 0.944096697556601,
          "title": "Supply Pump - 2",
          "text": "This pump delivers a maximum flow rate of 20 litres per second and a head of up to 49.5 metres, providing reliable and efficient performance for experimental setups requiring controlled, high-capacity water flow."
        },
        {
          "yaw": -0.26107329490731246,
          "pitch": 0.3217199642519688,
          "title": "Bypass",
          "text": "The bypass valve in the test rig allows precise control over the flow rate and pressure by diverting a portion of the water flow around the main circuit. Adjusting the bypass valve helps maintain optimal operating conditions for the supply pump, prevents potential issues like cavitation, and enables fine-tuning of flow to meet specific test requirements without altering the pump’s primary settings."
        },
        {
          "yaw": 0.046143621645118316,
          "pitch": -0.03181582887379086,
          "title": "Outlet Pipe",
          "text": "The outlet pipe channels the discharged flow from the turbine, directing it safely out of the system and maintaining consistent downstream pressure conditions."
        },
        {
          "yaw": 0.1683613566141915,
          "pitch": 0.3547171452533462,
          "title": "Reservoir",
          "text": "A 6000-litre capacity tank serves as a reservoir for the test rig, providing a steady supply of water to the system."
        },
        {
          "yaw": 0.5971133873537937,
          "pitch": -0.32267553053553044,
          "title": "Inlet Valve",
          "text": "The inlet valve of the turbine can be used to induce cavitation conditions by gradually restricting the flow entering the turbine. As the valve closes, it increases the flow velocity and reduces the pressure at the inlet, potentially lowering it below the vapor pressure of the fluid. This pressure drop can cause the formation of vapor bubbles, leading to cavitation. By carefully adjusting the valve position, controlled cavitation conditions can be created, which are useful for studying cavitation effects on the turbine’s performance and durability."
        },
        {
          "yaw": 0.5729355682504398,
          "pitch": -0.09148206350293009,
          "title": "Turbine",
          "text": "The turbine is equipped with condition monitoring sensors to facilitate predictive maintenance research. These sensors, including accelerometers, acoustic emission sensors, and pressure transducers, to monitor key parameters such as vibrations, acoustic signals, and pressure variations. Sensor data is collected using a state-of-the-art data acquisition system, enabling high-resolution monitoring these variables. This data is later analyzed to detect anomalies and estimate the remaining useful life (RUL), providing valuable insights for timely interventions and enhancing turbine reliability, efficiency, and operational longevity."
        },
        {
          "yaw": 0.7298633130127019,
          "pitch": 0.17140230365642495,
          "title": "Variable Frequency Drive",
          "text": "The Variable Frequency Drive (VFD)enables precise control of the turbine's rotational speed, allowing for seamless synchronization with the grid. I also captures detailed power output data, providing insights into performance and energy generation, which are essential for optimizing turbine operation and supporting research on grid integration."
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
