var home_html = `   
    <div class="divider-new pt-5">
    <h2 class="h2-responsive wow fadeIn" data-wow-delay="0.2s">About Maxim Tam</h2>
    </div>

    <!--Section: About-->
    <section id="about" class="text-center wow fadeIn" data-wow-delay="0.2s">
    <p>He is a general purpose developer who has delved in various computer science fields such as data analytics, machine
        learning, system integration, and desktop-mobile applet development.</p>
    </section>
    <!--Section: About-->

    <div class="divider-new pt-5">
    <h2 class="h2-responsive wow fadeIn">Projects</h2>
    </div>
    <p class="text-center">Click for more info</p>



    <!--Section: Projects-->
    <section id="projects">

    <div class="row pt-3">

        <!--First columnn-->
        <div class="col-lg-4 mb-r">

            <!--Card-->
            <a href="https://github.com/mtam2/Track-It-Jira-Migration-Public">
                <div class="card wow fadeIn">

                    <!--Card image-->
                    <img class="img-fluid" src="img/TJM.png" alt="Card image cap">

                    <!--Card content-->
                    <div class="card-body">
                        <!--Title-->
                        <h4 class="card-title text-center">Track-It! Jira Integration</h4>
                        <hr>
                        <!--Text-->
                        <p class="card-text">System integration between two ticketing systems, BMC Track-It! and Jira Software.</p>
                        <hr>
                        <p class="card-text">Developers: D. Tremer, M. Tam</p>
                    </div>

                </div>
            </a>
            <!--/.Card-->
        </div>
        <!--First columnn-->

        <!--Second columnn-->
        <div class="col-lg-4 mb-r">
            <!--Card-->
            <div class="card wow fadeIn" data-toggle="modal" data-target="#project-modal" onclick="modalChange('gfm')">

                <!--Card image-->
                <img class="img-fluid" src="img/GFM.png" alt="Card image cap">

                <!--Card content-->
                <div class="card-body">
                    <!--Title-->
                    <h4 class="card-title text-center">Generic File Monitor</h4>
                    <hr>
                    <!--Text-->
                    <p class="card-text">An application to analyze files' metadata using machine learning isolation forest algorithm.</p>
                    <hr>
                    <p class="card-text">Developers: D. Tremer, M. Tam</p>
                </div>

            </div>

            <!--/.Card-->
        </div>
        <!--Second columnn-->

        <!--Third columnn-->
        <div class="col-lg-4 mb-r">
            <!--Card-->
            <div class="card wow fadeIn" data-toggle="modal" data-target="#project-modal" onclick="modalChange('hadoop')">

                <!--Card image-->
                <img class="img-fluid" src="img/hadoop.jpg" alt="Card image cap">

                <!--Card content-->
                <div class="card-body">
                    <!--Title-->
                    <h4 class="card-title text-center">Hadoop Cluster Installation</h4>
                    <hr>
                    <!--Text-->
                    <p class="card-text">Custom built a Hadoop cluster with 5 decommissioned desktops.</p>
                    <hr>
                    <p class="card-text">Developers: D. Tremer, M. Tam</p>
                </div>

            </div>

            <!--/.Card-->
        </div>
        <!--Third columnn-->

        <!--First columnn-->
        <div class="col-lg-4 mb-r">
            <!--Card-->
            <div class="card wow fadeIn" data-toggle="modal" data-target="#project-modal" onclick="modalChange('ctrl-cloud')">

                <!--Card image-->
                <img class="img-fluid" src="img/ctrl_cloud_logo_SVG.png" alt="Card image cap">

                <!--Card content-->
                <div class="card-body">
                    <!--Title-->
                    <h4 class="card-title text-center">Ctrl-Cloud</h4>
                    <hr>
                    <!--Text-->
                    <p class="card-text">A cross-platform cloud-based universal clipboard for Web, Windows, Android.</p>
                    <hr>
                    <p class="card-text">Developers: Derrick Baines, Joseph Oliver, Anthony Oliver, Maxim Tam</p>
                </div>

            </div>
            <!--/.Card-->
        </div>
        <!--First columnn-->

        <!--Second columnn-->
        <div class="col-lg-4 mb-r">
            <!--Card-->
            <div class="card wow fadeIn" data-toggle="modal" data-target="#project-modal" onclick="modalChange('deep-blue')">
                <!--Card image-->
                <img class="img-fluid" src="img/DeepBlue.png" alt="Card image cap">

                <!--Card content-->
                <div class="card-body">
                    <!--Title-->
                    <h4 class="card-title text-center">Deep Blue</h4>
                    <hr>
                    <!--Text-->
                    <p class="card-text">A text-based adventure game in Java.</p>
                    <hr>
                    <p class="card-text">Developers: A. Cronic, A. Gonzalez, M. Tam</p>
                </div>

            </div>
            <!--/.Card-->
        </div>
        <!--Second columnn-->

        <!--Third columnn-->
        <div class="col-lg-4 mb-r">
            <!--Card-->
            <div class="card wow fadeIn" data-toggle="modal" data-target="#project-modal" onclick="modalChange('google')">

                <!--Card image-->
                <img class="img-fluid" src="img/pi.jpg" alt="Card image cap">

                <!--Card content-->
                <div class="card-body">
                    <!--Title-->
                    <h4 class="card-title text-center">Google Album API</h4>
                    <hr>
                    <!--Text-->
                    <p class="card-text">In development.</p>
                    <hr>
                    <p class="card-text">Developers: M. Tam</p>
                </div>

            </div>
            <!--/.Card-->
        </div>
        <!--Third columnn-->
    </div>

    </section>
    <!--/Section: Projects-->

    <!-- Modal -->
    <div id="project-modal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-lg">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <!-- <button type="button" class="close" data-dismiss="modal">&times;</button> -->
                <h4 class="modal-title" id="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">
                <p id="modal-body">Some text in the modal.</p>
            </div>
            <div class="modal-footer">
                <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
            </div>
        </div>
        <!-- /Modal content -->

    </div>
    </div>
    <!-- /Modal -->
`

var hadoop = `
        <h1>Introduction</h1>
        <p>
            A custom Hadoop cluster was built in June 2017 for Porsche Cars North America with 5 decommissioned desktops. 
            Due to restrictions on company network, this entire installation was done offline where ISO's and packages were installed via USB drive.
            The cluster was used to do distributed social media classification. 
        </p>
        <h1><a id="Tutorial_Installing_a_Hadoop_Testcluster_0"></a>Tutorial: Installing a Hadoop Testcluster</h1>
        <p>This guide has been Tested on Ubuntu Linux Server 14.04.05 LTS.<br> The Cluster is NOT suited for the Porsche production
            environment until following changes has been made:</p>
        <ul>
            <li>implement custom databases instead of embedded databases</li>
            <li>implement Kerberus authentification</li>
            <li>set up a custom repository with packages for the Cloudera Management Environment and some apt-get packages</li>
            <li>find the ports which has to be opened for the Cloudera Management Services and open them on each server instead of
                disabling the firewall</li>
        </ul>
        <p>Download the Image at: <a href="http://releases.ubuntu.com/14.04/">http://releases.ubuntu.com/14.04/</a><br> Requirements:
        </p>
        <ul>
            <li>Internet Connection</li>
            <li>DHCP server connection or ability to manually set IP addresses</li>
            <li>NTP server (we use the masternode as ntp server)</li>
            <li>Basic knowledge of UNIX Systems</li>
        </ul>
        <p>Minimum hardware requirements master Node:</p>
        <ul>
            <li>4 Cores</li>
            <li>16 GB RAM</li>
            <li>~500GB Harddrive</li>
        </ul>
        <p>Minimum hardware requirements slave Nodes:</p>
        <ul>
            <li>2 Cores</li>
            <li>4 GB RAM</li>
            <li>~500GB Harddrive</li>
        </ul>
        <h2><a id="Step_1_Install_Ubuntu_140405_on_all_Cluster_Nodes_26"></a>Step 1. Install Ubuntu 14.04.05 on all Cluster Nodes.</h2>
        <ul>
            <li>All nodes must be able to reach each other.</li>
            <li>Masternode:
                <ul>
                    <li>hostname: clouderamaster</li>
                    <li>login: master-cloudera</li>
                    <li>pw: Password</li>
                </ul>
            </li>
            <li>All slave nodes should have the same username and password in our case:
                <ul>
                    <li>hostnames: slave-cloudera-1, slave-cloudera-2, slave-cloudera-3</li>
                    <li>login: slave-cloudera</li>
                    <li>pw: Password</li>
                </ul>
            </li>
            <li>Install OpenSSH - Server</li>
        </ul>
        <h2><a id="Step_2_Edit_the_etchosts_file_on_all_nodes_37"></a>Step 2. Edit the /etc/hosts file on all nodes:</h2>
        <p>This has to be done since we have no DNS Server in our setup, do this for ALL nodes:</p>
        <p>SSH to each node and edit /etc/hosts, add all IPs and corresponding hostnames and comment out the second line</p>
        <p>Example for slave-cloudera-2:</p>
        <pre><code>$ sudo nano /etc/hosts

    127.0.0.1       localhost
    #127.0.1.1      slave-cloudera-2

    192.168.2.5 clouderamaster
    192.168.2.3 slave-cloudera-1
    192.168.2.4 slave-cloudera-2
    192.168.2.7 slave-cloudera-3
    </code></pre>
        <h3><a id="The_following_lines_are_desirable_for_IPv6_capable_hosts_54"></a>The following lines are desirable for IPv6 capable
            hosts
        </h3>
        <pre><code>::1     localhost ip6-localhost ip6-loopback
    ff02::1 ip6-allnodes
    ff02::2 ip6-allrouters
    </code></pre>
        <h2><a id="Step_3_Edit_the_NTP_settings_on_all_nodes_59"></a>Step 3. Edit the NTP settings on all nodes:</h2>
        <pre><code>$ sudo apt-get install ntp ntpdate
    </code></pre>
        <ol>
            <li>Edit /etc/ntp.conf file:</li>
        </ol>
        <pre><code>*   Add the NTP Server IP to the end of the /etc/ntp.conf file, comment out all other serverlinks in our case:

    #server xxx
    #server xxx
    #server xxx
    server 192.168.2.5
    </code></pre>
        <ol start="2">
            <li>Restart NTP:</li>
        </ol>
        <pre><code>$ sudo service ntp restart
    </code></pre>
        <h2><a id="Step_4_Remove_the_sudo_password_requirement_on_all_nodes_75"></a>Step 4. Remove the sudo password requirement
            on all nodes:</h2>
        <p>On clouderamaster:</p>
        <pre><code>$ sudo nano -f /etc/sudoers
    </code></pre>
        <p>Add at the bottom of the file this line:</p>
        <pre><code>master-cloudera ALL=(ALL) NOPASSWD:ALL
    </code></pre>
        <p>On all slave-nodes:</p>
        <pre><code>$ sudo nano -f /etc/sudoers
    </code></pre>
        <p>Add at the bottom of the file this line:</p>
        <pre><code>slave-cloudera ALL=(ALL) NOPASSWD:ALL
    </code></pre>
        <h2><a id="Step_4_Remove_the_firewall_on_all_nodes_91"></a>Step 4. Remove the firewall on all nodes:</h2>
        <p>This has to be done since unfortunately Cloudera dosen’t document the port rules properly. If someone finds the ports
            which has to be opened for the Cloudera Host Monitor please feel free to edit this page.</p>
        <ol>
            <li>Disable the firewall:
                <ul>
                    <li>
                        <pre><code>  $ sudo ufw disable
    $ sudo reboot now
    </code></pre>
                    </li>
                </ul>
            </li>
        </ol>
        <h2><a id="Step_5_Install_Cloudera_Management_Services_on_clouderamaster_98"></a>Step 5. Install Cloudera Management Services
            on clouderamaster:</h2>
        <p>SSH into clouderamaster and run following commands:</p>
        <pre><code>$ wget https://archive.cloudera.com/cm5/installer/latest/cloudera-manager-installer.bin

    $ sudo chmod u+x cloudera-manager-installer.bin

    $ sudo ./cloudera-manager-installer.bin
    </code></pre>
        <p>Follow the instructions of the installation wizard and accept the license agreements.</p>
        <h2><a id="Step_6_Install_the_masternode_via_webinterface_on_httpclouderamaster7180_107"></a>Step 6. Install the masternode
            via webinterface on <a href="http://clouderamaster:7180">http://clouderamaster:7180</a>:</h2>
        <ol>
            <li>Login into the Cloudera Webinterface via <a href="http://clouderamaster:7180">http://clouderamaster:7180</a> with:
                <ul>
                    <li>login: admin</li>
                    <li>pw: admin<br> If you cannot resolve to the server, check if the computer you’re trying to connect from knows
                        the server.On mac and ubuntu check if /etc/hosts includes: 192.168.2.5 clouderamaster</li>
                </ul>
            </li>
        </ol>
        <ul>
            <li>Follow the installation instructions:</li>
        </ul>
        <ol>
            <li>
                <p>Accept the license agreement</p>
                <img class="img-fluid" src="https://i.imgur.com/6ppgkTm.jpg">
            </li>
            <li>
                <p>Search for the clouderamaster IP on the searchbox, click search:</p>
                <img class="img-fluid" src="https://i.imgur.com/65sWk03.jpg">
            </li>
            <li>
                <p>Insert login credentials:</p>
                <img class="img-fluid" src="https://i.imgur.com/WPKCeaQ.jpg">
            </li>
            <li>
                <p>Do a parcel installation (some of them are not supported but maybe are needed after an upgrade):</p>
                <img class="img-fluid" src="https://i.imgur.com/e1dybxB.jpg">
            </li>
            <li>
                <p>After running the cluster installation it should look like this:</p>
                <img class="img-fluid" src="https://i.imgur.com/6q0HkK8.jpg">
            </li>
            <li>
                <p>Go on with the cluster setup and choose “All Services”, click continue on the next page:</p>
                <img class="img-fluid" src="https://i.imgur.com/khodji3.jpg">
            </li>
            <li>
                <p>After the cluster setup the host check-up should look like:</p>
                <img class="img-fluid" src="https://i.imgur.com/1f3ZEdS.jpg">
            </li>
            <li>
                <p>Continue, start the roles and finish the cluster setup.</p>
            </li>
        </ol>
        <h2><a id="Step_7_Add_slavenodes_13_via_webinterface_on_httpclouderamaster7180_to_the_cluster_128"></a>Step 7. Add slavenodes
            1-3 via webinterface on <a href="http://clouderamaster:7180">http://clouderamaster:7180</a> to the cluster:</h2>
        <ol>
            <li>At the web frontend click on “Hosts”</li>
            <li>Select “All Hosts”</li>
            <li>Select on the right upper corner “Add New Hosts to Cluster”</li>
            <li>click continue, search for: “192.168.2.3, 192.168.2.7, 192.168.2.4”</li>
            <li>Search and add the hosts, insert the slave user credentials, wait until the installation is completed.</li>
        </ol>
        <h2><a id="Step_8_Add_roles_to_slavenodes_13_via_webinterface_on_httpclouderamaster7180_134"></a>Step 8. Add roles to slavenodes
            1-3 via webinterface on <a href="http://clouderamaster:7180">http://clouderamaster:7180</a>:</h2>
        <p>We are going to install datanodes on the slavenodes and move worker roles to the slaves to distribute the workload.</p>
        <p>Install datanodes:</p>
        <ol>
            <li>Create host templates, by clicking on, “Hosts” → &quot;Host Templates&quot;→ “Create”</li>
            <li>Choose “HDFS” → “Datanode”</li>
            <li>Name your template and click create</li>
            <li>Click on “Hosts” → “All Hosts”</li>
            <li>Mark all slavenodes</li>
            <li>Click on “Action for Selected” → &quot;Apply Host Template&quot;→ choose your template and tick the checkbox “Deploy
                client config…”</li>
            <li>Confirm and finish the instalation</li>
        </ol>
        <p>Move Roles:</p>
        <p>Follow the “Install datanodes” steps with the roles you want to distribute over the different clusternodes. Choose the
            nodes with the most free ram first. Remove the roles from the Cloudera Manager Server after installing them on the
            slavenodes. See the list below for roles which are save to move.</p>
        <p>Info: roles which are safe to move from master to slave nodes:</p>
        <p>• YARN RessourceManager<br> • YARN NodeManager<br> • HBase Regionserver<br> • Impala Deamon<br> • Spark History<br> •
            Impala Catalog Server<br> • Imapala Statestore</p>
`

var gfm = `
    <div id="temp" class="text-center">
    <!--Carousel Wrapper-->
    <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
        <!--Indicators-->
        <ol class="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" class="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <!--/.Indicators-->
        <!--Slides-->
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <div class="view">
                    <img class="d-block w-100" src="img/GFM1.png" alt="First slide">
                </div>
            </div>
            <div class="carousel-item">
                <!--Mask color-->
                <div class="view">
                    <img class="d-block w-100" src="img/GFM2.png" alt="Second slide">
                </div>
            </div>
            <div class="carousel-item">
                <!--Mask color-->
                <div class="view">
                    <img class="d-block w-100" src="img/GFM3.png" alt="Third slide">
                </div>
            </div>
        </div>
        <!--/.Slides-->
        <!--Controls-->
        <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        <!--/.Controls-->
    </div>
    <!--/.Carousel Wrapper-->
    <br>
    <ul>
        <p>
            Generic File Monitor is a project designed for Porsche Cars North America to identify anomalies in daily
            schedule incoming files. PowerShell was used to export file metadata to a CSV file which could be easily
            processed by Python. The data was normalized using Pandas DataFrames which was used to train an Scikit-learn
            Isolation Forest model to detect anomalies. The model output data was then transformed into JSON objects
            for Highcharts.js for easy readability in a Flask-powered server.
        </p>
        <li>Extracted historic metadata from various Windows Servers using scheduled PowerShell scripts</li>
        <li>Used Pandas DataFrames to clean and extract relevant time stamps and file size</li>
        <li>Analyzed historic metadata using a Isolated Forest algorithm in Python to detect anomalies</li>
        <li>Displayed visualization and notification using Highcharts and a rudimentary Flask server</li>
    </ul>
    <a type="button" class="btn btn-primary btn-sm" href="https://github.com/mtam2/Generic-File-Monitor-Public">
        <img src="img/GitHub-Mark-32px.png"> GitHub Repo
    </a>
    </div>
`