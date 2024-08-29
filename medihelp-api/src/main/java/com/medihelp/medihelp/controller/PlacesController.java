package com.medihelp.medihelp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
public class PlacesController {

    private static final String MEDIHELPKEY = System.getenv("MEDIHELPKEY");
    private static final String GOOGLE_PLACES_API_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
    @GetMapping("/healthcare")

    public ResponseEntity<?> getNearbyHealthCenters(@RequestParam String zipCode){
        try{
            String url = GOOGLE_PLACES_API_URL + "?key=" + MEDIHELPKEY + "&location=" + getLocationFromZipcode(zipCode) + "&radius=5000&type=hospital";
            RestTemplate restTemplate = new RestTemplate();
            Map<String,Object> response=restTemplate.getForObject(url,Map.class);
                return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>("error fetching healthcare centers.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public String getLocationFromZipcode(String zipCode){
        return "37.7, -122.4";
    }

}
