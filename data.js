var APP_DATA = {
  "scenes": [
    {
      "id": "0-trinity-college-dublin",
      "name": "Trinity College Dublin",
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
        "yaw": 0.10362946403547468,
        "pitch": 0.15661619832619245,
        "fov": 1.3564874733007806
      },
      "linkHotspots": [
        {
          "yaw": 0.030990527336278717,
          "pitch": 0.19952655021560162,
          "rotation": 0,
          "target": "1-turbine-testing-lab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.055793230178968756,
          "pitch": 0.12076697697282768,
          "title": "Department of Civil, Structural &amp; Environmental Engineering",
          "text": "Simon Perry Building"
        },
        {
          "yaw": -0.8633178318982004,
          "pitch": 0.31234066044285314,
          "title": "College Park",
          "text": "Rugby Pitch"
        },
        {
          "yaw": -2.1373439124132254,
          "pitch": -0.09180430428702202,
          "title": "Department of Civil, Structural &amp; Environmental Engineering",
          "text": "Museum Building"
        },
        {
          "yaw": 2.499204275379407,
          "pitch": -0.03822806308219029,
          "title": "College Park",
          "text": "Football / Cricket Pitch"
        },
        {
          "yaw": 0.10813898387693222,
          "pitch": 0.0062705019594062605,
          "title": "Trinity Business School",
          "text": "<br>"
        },
        {
          "yaw": 0.36294519134832903,
          "pitch": 0.1658861891766108,
          "title": "School of Botany",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-turbine-testing-lab",
      "name": "Turbine Testing Lab",
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
        "yaw": -0.08563113871708339,
        "pitch": 0.13332178062991495,
        "fov": 1.3564874733007806
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -0.3469610723679608,
          "pitch": 0.26443284893633745,
          "title": "Bypass valves",
          "text": "The bypass valves for each supply pumps allow precise control over the flow rate and pressure by diverting a portion of the water flow around the main hydraulic circuit. Adjusting the bypass valve helps maintain optimal operating conditions for the supply pump, prevents potential issues like cavitation, and enables fine-tuning of flow to meet specific test requirements without altering the pump’s primary settings."
        },
        {
          "yaw": 0.3648012960582765,
          "pitch": 0.783730977893013,
          "title": "Data Acquisition Centre",
          "text": "The data acquisition centre is equipped with dedicated DAQ systems for capturing various sensor data, including vibration, acoustic emission (AE), pressure, flow, and power output. It also includes a PC for data processing, signal conditioners to enhance signal quality, and specialised software for data visualisation and analysis. This setup allows for comprehensive monitoring and precise data collection, enabling detailed analysis and facilitating predictive maintenance and performance optimisation studies on the turbine system."
        },
        {
          "yaw": 0.1118206791429408,
          "pitch": 0.3219532291639968,
          "title": "Reservoir",
          "text": "A 6000-litre capacity tank serves as a reservoir for the test rig, providing a steady supply of water to the system."
        },
        {
          "yaw": 0.05129156683283398,
          "pitch": -0.03342391903206732,
          "title": "Outlet Pipe",
          "text": "The outlet pipe channels the discharged flow from the turbine, directing it safely out of the system and maintaining consistent downstream pressure conditions."
        },
        {
          "yaw": 0.5946456845420727,
          "pitch": -0.1504634440480821,
          "title": "Turbine",
          "text": "The turbine is equipped with condition monitoring sensors to facilitate predictive maintenance research. These sensors, including accelerometers, acoustic emission sensors, and pressure transducers monitor key parameters such as vibrations, acoustic signals, and pressure variations. Sensor data is collected using a state-of-the-art data acquisition system, enabling high-resolution monitoring of these variables. This data is later analysed to detect anomalies and estimate the remaining useful life (RUL), providing valuable insights for timely interventions and enhancing turbine reliability, efficiency, and operational longevity."
        },
        {
          "yaw": 0.33609672907866717,
          "pitch": -0.4169554318823625,
          "title": "Flowmeter",
          "text": "The flowmeter measures the volume of water supplied to the turbine, providing real-time data on flow rate. This information is crucial for monitoring and adjusting flow conditions to meet specific testing requirements, ensuring consistent performance and reliable data collection throughout the experiment."
        },
        {
          "yaw": 0.5853988030233843,
          "pitch": -0.33313387733873334,
          "title": "Inlet Valve",
          "text": "The inlet valve is used to regulate the flow entering the turbine to create cavitation conditions. As the valve closes, it increases the flow velocity and reduces the pressure at the inlet, potentially lowering it below the vapour pressure of the fluid. This pressure drops can cause the formation of vapour bubbles, leading to cavitation. Cavitation conditions can be created by adjusting the valve position carefully, which are useful for studying cavitation effects on the turbine’s performance and durability."
        },
        {
          "yaw": -0.684458972700142,
          "pitch": 0.8216069317626342,
          "title": "Supply Pump 1",
          "text": "This pump delivers a maximum flow rate of 34 litres per second and a head of up to 60 metres, providing reliable and efficient performance for experimental setups requiring controlled, high-capacity water flow."
        },
        {
          "yaw": -0.32675241443913094,
          "pitch": 0.7821909477240183,
          "title": "Supply Pump 2",
          "text": "This pump delivers a maximum flow rate of 20 litres per second and a head of up to 49.5 metres, providing reliable and efficient performance for experimental setups requiring controlled, high-capacity water flow."
        },
        {
          "yaw": 0.7333075395131576,
          "pitch": 0.15556291649066978,
          "title": "Variable Frequency Drive",
          "text": "The Variable Frequency Drive (VFD)enables precise control of the turbine's rotational speed, allowing for seamless synchronization with the grid. I also capture detailed power output data, providing insights into performance and energy generation, which are essential for optimizing turbine operation and supporting research on grid integration."
        },
        {
          "yaw": 1.9535196847860998,
          "pitch": -0.4748513246003103,
          "title": "Close view of Experimetnal Setup",
          "text": "<p class=\"MsoNormal\">A view of the experimental configuration, including the\nflowmeter, pressure sensors, inlet valve, and the experimental turbine. An observation pane is\ninstalled at the turbine outlet, allowing direct visualisation of cavitation\nphenomena. A generator connected to the turbine for power\ngeneration, enabling comprehensive performance analysis and research into condition\nmonitoring of turbines.<o:p></o:p></p>"
        },
        {
          "yaw": 1.7726914544866403,
          "pitch": -0.011089895509861947,
          "title": "Close view of Sensors on the Turbine",
          "text": "<p><span style=\"font-size:10.0pt;font-family:&quot;Helvetica&quot;,sans-serif\">A close-up\nof the condition monitoring sensors installed on the turbine. This includes\naccelerometers for capturing vibration data and acoustic emission (AE) sensors\nfor detecting high-frequency sounds associated with cavitation and structural\nstress. These sensors are strategically placed to gather real-time data,\nenabling detailed analysis of operational conditions, early fault detection,\nand assessment of the turbine’s remaining useful life (RUL) as part of\npredictive maintenance efforts.<o:p></o:p></span></p>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
