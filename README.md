"# Map-layer-with-Mapbox" 


Mapbox Configurations:

1. The first design configuration I chose to do was to use the navigation map as the base. This is because the dataset which we were working with involved traffic incidents in Calgary which is primarily on the roads, and the base navigation map provided a decent baseline. 

2. The next thing I did was to make components for layers which I thought were impactful. This included the road, landuse, water, and the background. 

3. The color scheme I decided to use for this focused on three main colors consisting of green, black, and light blue. This is because the colors go really well together, but primarily because the black background and the green roads allow the traffic incidents in blue to pop out. It makes it easy to view the incidents regardless of zoom. Using a lighter theme would make the incidents blend in with the surroundings and make it harder to identify them.

4. I created a new layer for the road in which I selected green for the roads. I made the opacity 0.5, with a width of 0.1 px. This was to ensure that the roads would still be visible but would not interfere with the traffic incidents.

5. For the tileset (traffic incidents dataset), I used a varying radius. The radius of the circles which indicate traffic incidents are smaller at a smaller zoom level. This is to make sure that the circles don't block the city at smaller zoom levels. It starts at 0px at zoom level of 0 and increases exponentially until zoom level 11 to a pixel radius of about 3. This is because at this zoom level, you start seeing the community names, and the roads name. Making it bigger allows you to identify the incidents much easier. At zoom level 12, it steps up from 3 px to 5 px as the street names become visible. Similarly, I implemented a blur of 1 at zoom level 0 which increases linearly to a blur of 0 at zoom level 12. This is because the blur helps "clear up" the crowded areas such as the incidents in downtown. At zoom level 12, a blur is not needed as the points can be identified easily. I did the same thing for opacity. It starts at 0 at zoom level 0 and goes to 1 at zoom level 12. This is because at smaller zoom levels, you do not need to see the points, but at higher zoom levels, the points become clear. The stroke width was set to 1 px, with a stroke color of black just to make it a bit easier to identify incidents from the other features such as the roads. The stroke opacity was at 1px. 

6. I also made a lyer for landuse and water because I think if a user is looking for specific information such as traffic incidents, then they don't really need information about the water or the area around it, but rather just the road. I made this toggleable to allow the user to more easily identify the incidents if they wish to do so. I did the same thing for satellite, to ensure if a user were looking for specific detail about an intersection incident, they would be able to get the data from the satellite map. 

