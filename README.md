# gibs-leaflet

Javascript component to integrate NASA GIBS satellite imagery with Leaflet maps. Based on [aparshin/leaflet-GIBS](https://github.com/aparshin/leaflet-GIBS), and repacked to be used as a NPM module.

## Installation


```bash
npm install --save gibs-leaflet
```

## Usage 

```
import L from 'leaflet';
import GIBSLeaflet from 'gibs-leaflet';

const mapWithGIBSLayers = GIBSLeaflet.wrap(L);
```

### Adding layers

After defining a base Leaflet layer for your map, you can add to it as many GIBS layers as you wish, as follows

```
// define additional layers
const layer1 = new L.GIBSLayer('GMI_Snow_Rate_Asc', {
    date: new Date('2018/11/15'),
	  transparent: true
});

// create an object that contains all your layers
const layers = {
     Snow rate : layer1,
    // more layers
}

// create a layer control and add it to the map
L.control.layers(layers).addTo(this.mapWithGIBSLayers);

```

### Available layers list 
   * AMSR2_Snow_Water_Equivalent   
   * AMSR2_Cloud_Liquid_Water_Day  
   * AMSR2_Cloud_Liquid_Water_Night  
   * AMSR2_Surface_Precipitation_Rate_Day  
   * AMSR2_Surface_Precipitation_Rate_Night  
   * AMSR2_Surface_Rain_Rate_Day  
   * AMSR2_Surface_Rain_Rate_Night  
   * AMSR2_Wind_Speed_Day  
   * AMSR2_Wind_Speed_Night  
   * AMSR2_Columnar_Water_Vapor_Day  
   * AMSR2_Columnar_Water_Vapor_Night  
   * AMSR2_Sea_Ice_Concentration_12km  
   * AMSR2_Sea_Ice_Concentration_25km  
   * AMSR2_Sea_Ice_Brightness_Temp_6km_89H  
   * AMSR2_Sea_Ice_Brightness_Temp_6km_89V  
   * AMSRE_Brightness_Temp_89H_Day  
   * AMSRE_Brightness_Temp_89H_Night    
   * AMSRE_Brightness_Temp_89V_Day  
   * AMSRE_Brightness_Temp_89V_Night  
   * AMSRE_Surface_Precipitation_Rate_Day  
   * AMSRE_Surface_Precipitation_Rate_Night  
   * AMSRE_Surface_Rain_Rate_Day 
   * AMSRE_Surface_Rain_Rate_Night  
   * AMSRE_Sea_Ice_Concentration_12km  
   * AMSRE_Snow_Depth_Over_Ice  
   * AMSRE_Sea_Ice_Concentration_25km  
   * AMSRE_Sea_Ice_Brightness_Temp_89H  
   * AMSRE_Sea_Ice_Brightness_Temp_89V  
   * AIRS_CO_Total_Column_Day  
   * AIRS_CO_Total_Column_Night  
   * AIRS_Dust_Score_Ocean_Day  
   * AIRS_Dust_Score_Ocean_Night  
   * AIRS_Prata_SO2_Index_Day  
   * AIRS_Prata_SO2_Index_Night  
   * AIRS_Precipitation_Day  
   * AIRS_Precipitation_Night  
   * AIRS_RelativeHumidity_400hPa_Day  
   * AIRS_RelativeHumidity_400hPa_Night  
   * AIRS_RelativeHumidity_500hPa_Day  
   * AIRS_RelativeHumidity_500hPa_Night  
   * AIRS_RelativeHumidity_600hPa_Day  
   * AIRS_RelativeHumidity_600hPa_Night  
   * AIRS_RelativeHumidity_700hPa_Day  
   * AIRS_RelativeHumidity_700hPa_Night 
   * AIRS_RelativeHumidity_850hPa_Day 
   * AIRS_RelativeHumidity_850hPa_Night  
   * AIRS_Temperature_400hPa_Day  
   * AIRS_Temperature_400hPa_Night  
   * AIRS_Temperature_500hPa_Day  
   * AIRS_Temperature_500hPa_Night
   * AIRS_Temperature_600hPa_Day  
   * AIRS_Temperature_600hPa_Night 
   * AIRS_Temperature_700hPa_Day 
   * AIRS_Temperature_700hPa_Night  
   * AIRS_Temperature_850hPa_Day  
   * AIRS_Temperature_850hPa_Night 
   * BlueMarble_NextGeneration  
   * BlueMarble_ShadedRelief  
   * BlueMarble_ShadedRelief_Bathymetry 
   * CERES_Combined_TOA_Longwave_Flux_All_Sky_Monthly  
   * CERES_Combined_TOA_Longwave_Flux_Clear_Sky_Monthly  
   * CERES_Combined_TOA_Shortwave_Flux_All_Sky_Monthly  
   * CERES_Combined_TOA_Shortwave_Flux_Clear_Sky_Monthly 
   * CERES_Combined_TOA_Window_Region_Flux_All_Sky_Monthly  
   * CERES_Combined_TOA_Window_Region_Flux_Clear_Sky_Monthly  
   * CERES_EBAF_Surface_CRE_Net_Longwave_Flux_Monthly  
   * CERES_EBAF_Surface_CRE_Net_Shortwave_Flux_Monthly  
   * CERES_EBAF_Surface_CRE_Net_Total_Flux_Monthly  
   * CERES_EBAF_Surface_Longwave_Flux_Down_All_Sky_Monthly  
   * CERES_EBAF_Surface_Longwave_Flux_Up_All_Sky_Monthly  
   * CERES_EBAF_Surface_Longwave_Flux_Down_Clear_Sky_Monthly  
   * CERES_EBAF_Surface_Longwave_Flux_Up_Clear_Sky_Monthly  
   * CERES_EBAF_Surface_Net_Longwave_Flux_All_Sky_Monthly  
   * CERES_EBAF_Surface_Net_Longwave_Flux_Clear_Sky_Monthly  
   * CERES_EBAF_Surface_Net_Shortwave_Flux_All_Sky_Monthly  
   * CERES_EBAF_Surface_Net_Shortwave_Flux_Clear_Sky_Monthly  
   * CERES_EBAF_Surface_Net_Total_Flux_All_Sky_Monthly  
   * CERES_EBAF_Surface_Net_Total_Flux_Clear_Sky_Monthly 
   * CERES_EBAF_Surface_Shortwave_Flux_Down_All_Sky_Monthly  
   * CERES_EBAF_Surface_Shortwave_Flux_Up_All_Sky_Monthly  
   * CERES_EBAF_Surface_Shortwave_Flux_Down_Clear_Sky_Monthly  
   * CERES_EBAF_Surface_Shortwave_Flux_Up_Clear_Sky_Monthly  
   * CERES_EBAF_TOA_CRE_Longwave_Flux_Monthly  
   * CERES_EBAF_TOA_CRE_Net_Flux_Monthly  
   * CERES_EBAF_TOA_CRE_Shortwave_Flux_Monthly  
   * CERES_EBAF_TOA_Longwave_Flux_All_Sky_Monthly  
   * CERES_EBAF_TOA_Longwave_Flux_Clear_Sky_Monthly  
   * CERES_EBAF_TOA_Net_Flux_All_Sky_Monthly  
   * CERES_EBAF_TOA_Net_Flux_Clear_Sky_Monthly  
   * CERES_EBAF_TOA_Incoming_Solar_Flux_Monthly  
   * CERES_EBAF_TOA_Shortwave_Flux_All_Sky_Monthly  
   * CERES_EBAF_TOA_Shortwave_Flux_Clear_Sky_Monthly  
   * CERES_Terra_TOA_Longwave_Flux_All_Sky_Monthly  
   * CERES_Terra_TOA_Longwave_Flux_Clear_Sky_Monthly  
   * CERES_Terra_TOA_Shortwave_Flux_All_Sky_Monthly  
   * CERES_Terra_TOA_Shortwave_Flux_Clear_Sky_Monthly  
   * CERES_Terra_TOA_Window_Region_Flux_All_Sky_Monthly  
   * CERES_Terra_TOA_Window_Region_Flux_Clear_Sky_Monthly  
   * Coastlines  
   * GHRSST_L4_G1SST_Sea_Surface_Temperature  
   * GHRSST_L4_MUR_Sea_Surface_Temperature  
   * GMI_Rain_Rate_Asc  
   * GMI_Rain_Rate_Dsc  
   * GMI_Brightness_Temp_Asc  
   * GMI_Brightness_Temp_Dsc  
   * GMI_Snow_Rate_Asc  
   * GMI_Snow_Rate_Dsc  
   * MODIS_Combined_Value_Added_AOD  
   * MEaSUREs_Daily_Landscape_Freeze_Thaw_AMSRE  
   * MEaSUREs_Daily_Landscape_Freeze_Thaw_SSMI  
   * MISR_Directional_Hemispherical_Reflectance_Average_Natural_Color_Monthly  
   * MISR_Radiance_Average_Infrared_Color_Monthly  
   * MISR_Radiance_Average_Natural_Color_Monthly  
   * MLS_CO_215hPa_Day  
   * MLS_CO_215hPa_Night  
   * MLS_H2O_46hPa_Day  
   * MLS_H2O_46hPa_Night  
   * MLS_HNO3_46hPa_Day  
   * MLS_HNO3_46hPa_Night  
   * MLS_N2O_46hPa_Day  
   * MLS_N2O_46hPa_Night  
   * MLS_O3_46hPa_Day  
   * MLS_O3_46hPa_Night  
   * MLS_SO2_147hPa_Day  
   * MLS_SO2_147hPa_Night  
   * MLS_Temperature_46hPa_Day  
   * MLS_Temperature_46hPa_Night  
   * MODIS_Terra_Chlorophyll_A  
   * MODIS_Water_Mask 
   * MODIS_Terra_Brightness_Temp_Band31_Day  
   * MODIS_Terra_Brightness_Temp_Band31_Night  
   * MODIS_Terra_Aerosol_Optical_Depth_3km  
   * MODIS_Terra_Angstrom_Exponent_Land  
   * MODIS_Terra_Angstrom_Exponent_Ocean  
   * MODIS_Terra_AOD_Deep_Blue_Land  
   * MODIS_Terra_AOD_Deep_Blue_Combined  
   * MODIS_Terra_Aerosol  
   * MODIS_Terra_Water_Vapor_5km_Day  
   * MODIS_Terra_Water_Vapor_5km_Night  
   * MODIS_Terra_Cloud_Effective_Radius_37_PCL  
   * MODIS_Terra_Cloud_Effective_Radius_37  
   * MODIS_Terra_Cloud_Effective_Radius  
   * MODIS_Terra_Cloud_Effective_Radius_PCL  
   * MODIS_Terra_Cloud_Multi_Layer_Flag  
   * MODIS_Terra_Cloud_Optical_Thickness  
   * MODIS_Terra_Cloud_Optical_Thickness_PCL  
   * MODIS_Terra_Cloud_Phase_Optical_Properties  
   * MODIS_Terra_Cloud_Water_Path  
   * MODIS_Terra_Cloud_Water_Path_PCL  
   * MODIS_Terra_Cloud_Fraction_Day  
   * MODIS_Terra_Cloud_Phase_Infrared_Day  
   * MODIS_Terra_Cloud_Top_Height_Day  
   * MODIS_Terra_Cloud_Top_Pressure_Day  
   * MODIS_Terra_Cloud_Top_Temp_Day  
   * MODIS_Terra_Cloud_Fraction_Night  
   * MODIS_Terra_Cloud_Phase_Infrared_Night  
   * MODIS_Terra_Cloud_Top_Height_Night  
   * MODIS_Terra_Cloud_Top_Pressure_Night  
   * MODIS_Terra_Cloud_Top_Temp_Night  
   * MODIS_Terra_SurfaceReflectance_Bands143  
   * MODIS_Terra_SurfaceReflectance_Bands721  
   * MODIS_Terra_SurfaceReflectance_Bands121  
   * MODIS_Terra_NDSI_Snow_Cover  
   * MODIS_Terra_Land_Surface_Temp_Day  
   * MODIS_Terra_Land_Surface_Temp_Night  
   * MODIS_Terra_Sea_Ice  
   * MODIS_Terra_CorrectedReflectance_TrueColor  
   * MODIS_Terra_CorrectedReflectance_Bands367  
   * MODIS_Terra_CorrectedReflectance_Bands721  
   * MOPITT_CO_Daily_Surface_Mixing_Ratio_Night  
   * MOPITT_CO_Daily_Surface_Mixing_Ratio_Day  
   * MOPITT_CO_Daily_Total_Column_Night  
   * MOPITT_CO_Daily_Total_Column_Day  
   * MOPITT_CO_Monthly_Surface_Mixing_Ratio_Night  
   * MOPITT_CO_Monthly_Surface_Mixing_Ratio_Day  
   * MOPITT_CO_Monthly_Total_Column_Night  
   * MOPITT_CO_Monthly_Total_Column_Day  
   * MODIS_Aqua_Chlorophyll_A  
   * MODIS_Aqua_Brightness_Temp_Band31_Day  
   * MODIS_Aqua_Brightness_Temp_Band31_Night  
   * MODIS_Aqua_Aerosol_Optical_Depth_3km  
   * MODIS_Aqua_Angstrom_Exponent_Land  
   * MODIS_Aqua_Angstrom_Exponent_Ocean  
   * MODIS_Aqua_AOD_Deep_Blue_Land  
   * MODIS_Aqua_AOD_Deep_Blue_Combined  
   * MODIS_Aqua_Aerosol  
   * MODIS_Aqua_Water_Vapor_5km_Day  
   * MODIS_Aqua_Water_Vapor_5km_Night  
   * MODIS_Aqua_Cloud_Effective_Radius_37_PCL  
   * MODIS_Aqua_Cloud_Effective_Radius_37  
   * MODIS_Aqua_Cloud_Effective_Radius  
   * MODIS_Aqua_Cloud_Effective_Radius_PCL  
   * MODIS_Aqua_Cloud_Multi_Layer_Flag  
   * MODIS_Aqua_Cloud_Optical_Thickness  
   * MODIS_Aqua_Cloud_Optical_Thickness_PCL  
   * MODIS_Aqua_Cloud_Phase_Optical_Properties  
   * MODIS_Aqua_Cloud_Water_Path  
   * MODIS_Aqua_Cloud_Water_Path_PCL  
   * MODIS_Aqua_Cloud_Fraction_Day  
   * MODIS_Aqua_Cloud_Phase_Infrared_Day  
   * MODIS_Aqua_Cloud_Top_Height_Day  
   * MODIS_Aqua_Cloud_Top_Pressure_Day  
   * MODIS_Aqua_Cloud_Top_Temp_Day  
   * MODIS_Aqua_Cloud_Fraction_Night  
   * MODIS_Aqua_Cloud_Phase_Infrared_Night  
   * MODIS_Aqua_Cloud_Top_Height_Night  
   * MODIS_Aqua_Cloud_Top_Pressure_Night  
   * MODIS_Aqua_Cloud_Top_Temp_Night  
   * MODIS_Aqua_SurfaceReflectance_Bands143  
   * MODIS_Aqua_SurfaceReflectance_Bands721  
   * MODIS_Aqua_SurfaceReflectance_Bands121  
   * MODIS_Aqua_NDSI_Snow_Cover  
   * MODIS_Aqua_Land_Surface_Temp_Day  
   * MODIS_Aqua_Land_Surface_Temp_Night  
   * MODIS_Aqua_Sea_Ice  
   * MODIS_Aqua_CorrectedReflectance_TrueColor  
   * MODIS_Aqua_CorrectedReflectance_Bands721  
   * OMI_Absorbing_Aerosol_Optical_Depth  
   * OMI_Aerosol_Index  
   * OMI_Aerosol_Optical_Depth  
   * OMI_Cloud_Pressure  
   * OMI_SO2_Upper_Troposphere_and_Stratosphere  
   * OMI_SO2_Lower_Troposphere  
   * OMI_SO2_Middle_Troposphere  
   * Reference_Features  
   * Reference_Labels        
   * SMAP_L1_Passive_Faraday_Rotation_Aft  
   * SMAP_L1_Passive_Faraday_Rotation_Fore  
   * SMAP_L1_Passive_Brightness_Temp_Aft_H_QA  
   * SMAP_L1_Passive_Brightness_Temp_Aft_H_RFI  
   * SMAP_L1_Passive_Brightness_Temp_Aft_H  
   * SMAP_L1_Passive_Brightness_Temp_Fore_H_QA  
   * SMAP_L1_Passive_Brightness_Temp_Fore_H_RFI  
   * SMAP_L1_Passive_Brightness_Temp_Fore_H  
   * SMAP_L1_Passive_Brightness_Temp_Aft_V_QA  
   * SMAP_L1_Passive_Brightness_Temp_Aft_V_RFI  
   * SMAP_L1_Passive_Brightness_Temp_Aft_V  
   * SMAP_L1_Passive_Brightness_Temp_Fore_V_QA  
   * SMAP_L1_Passive_Brightness_Temp_Fore_V_RFI  
   * SMAP_L1_Passive_Brightness_Temp_Fore_V  
   * SMAP_L3_Active_Sigma0_HH_QA  
   * SMAP_L3_Active_Sigma0_HH_RFI  
   * SMAP_L3_Active_Sigma0_HH  
   * SMAP_L3_Active_Sigma0_VV_QA  
   * SMAP_L3_Active_Sigma0_VV_RFI  
   * SMAP_L3_Active_Sigma0_VV  
   * SMAP_L3_Active_Sigma0_XPOL_QA  
   * SMAP_L3_Active_Sigma0_XPOL_RFI  
   * SMAP_L3_Active_Sigma0_XPOL  
   * SMAP_L3_Active_Soil_Moisture  
   * SMAP_L3_Active_Passive_Soil_Moisture  
   * SMAP_L3_Active_Passive_Brightness_Temp_H  
   * SMAP_L3_Passive_Brightness_Temp_H  
   * SMAP_L3_Active_Passive_Brightness_Temp_V  
   * SMAP_L3_Passive_Brightness_Temp_V  
   * SMAP_L4_Analyzed_Root_Zone_Soil_Moisture  
   * SMAP_L4_Analyzed_Surface_Soil_Moisture  
   * SMAP_L4_Emult_Average  
   * SMAP_L4_Frozen_Area  
   * SMAP_L4_Mean_Gross_Primary_Productivity  
   * SMAP_L4_Mean_Net_Ecosystem_Exchange  
   * SMAP_L4_Mean_Heterotrophic_Respiration  
   * SMAP_L4_Snow_Mass  
   * SMAP_L4_Soil_Temperature_Layer_1  
   * SMAP_L4_Uncertainty_Analyzed_Root_Zone_Soil_Moisture  
   * SMAP_L4_Uncertainty_Analyzed_Surface_Soil_Moisture  
   * SMAP_L4_Uncertainty_Mean_Net_Ecosystem_Exchange  
   * VIIRS_CityLights_2012  
   * VIIRS_SNPP_DayNightBand_ENCC  
   * VIIRS_SNPP_CorrectedReflectance_TrueColor  
   * VIIRS_SNPP_CorrectedReflectance_BandsM11-I2-I1  
   * VIIRS_SNPP_CorrectedReflectance_BandsM3-I3-M11   
   * MODIS_Terra_Data_No_Data  
   * MODIS_Aqua_Data_No_Data 
