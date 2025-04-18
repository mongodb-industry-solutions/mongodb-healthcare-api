# MongoDB Healthcare API

To load test data into MongoDB, download [synthea latest FHIR dataset](https://synthetichealth.github.io/synthea-sample-data/downloads/latest/synthea_sample_data_fhir_latest.zip), extract and place it inside `modules/fhir/load-data`

# Run the API

```
npm install
````

```
npm run api
```

Open your browser and navigate to http://localhost:3456/api/docs to view the OpenAPI documentation.


# Docker Container for API
```
docker build -t hc-framework .
```

```
docker run -d --name hc-framework -p 3456:3456 hc-framework
```

# FHIR Operations

The following table lists the FHIR operations supported by this system. These operations allow interaction with FHIR resources.

| Feature             | Supported |
| ------------------- | --------- |
| Create             | ✅      |
| Read               | ✅      |
| Update             | ✅      |
| Delete             | ✅      |
| VRead              | ❌       |
| History (Instance) | ❌       |
| History (Type)     | ❌       |
| Search (Type)      | ❌       |
| Patch              | ❌       |
| Validate           | ❌       |
| Everything         | ❌       |