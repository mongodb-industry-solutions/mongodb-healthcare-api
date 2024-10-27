# Mongodb Healthcare Framework (MHF)

To load test data into MongoDB, download [synthea latest FHIR dataset](https://synthetichealth.github.io/synthea-sample-data/downloads/latest/synthea_sample_data_fhir_latest.zip), extract and place it in the below folder structure<br>
    - tests/synthea_sample_data_fhir_latest


# Docker Container
```
docker build -t hc-framework .
```

```
docker run -p 3456:3456 hc-framework -d --name hc-framework 
```