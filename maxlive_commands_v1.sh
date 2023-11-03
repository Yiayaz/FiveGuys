# Build the images
docker build -t fiveguys4399/adminaccountservice ./AdminAccountService
docker build -t fiveguys4399/financialservice ./FinancialService
docker build -t fiveguys4399/platformservice ./PlatformService
docker build -t fiveguys4399/streamingdediaservice ./StreamingMediaService
docker build -t fiveguys4399/subscriptionservice ./SubscriptionService

docker build -t fiveguys4399/creatoraccount ./Creator_Account
docker build -t fiveguys4399/creatorsidehistory ./Creatorside_History
docker build -t fiveguys4399/serversidehistory ./Serverside_History
docker build -t fiveguys4399/useraccount ./User_Account
docker build -t fiveguys4399/usersidehistory ./Userside_History

docker build -t fiveguys4399/apigateways ./ApiGateways
docker build -t fiveguys4399/ingestionservice ./IngestionService
docker build -t fiveguys4399/loadbalancer ./LoadBalancer
docker build -t fiveguys4399/usersidemanagerservice ./UsersideManagerService
docker build -t fiveguys4399/usersideservice ./UsersideService

docker build -t fiveguys4399/circuitbre ./CircuitBre
docker build -t fiveguys4399/creatorside ./Creatorside
docker build -t fiveguys4399/creatorsideman ./CreatorsideMan
docker build -t fiveguys4399/serverside ./Serverside
docker build -t fiveguys4399/serversidemanager ./ServersideManager

# Run the containers
docker run -d --name adminaccountservice_container -p 3001:3000 fiveguys4399/adminaccountservice
docker run -d --name financialservice_container -p 3002:3000 fiveguys4399/financialservice
docker run -d --name platformservice_container -p 3003:3000 fiveguys4399/platformservice
docker run -d --name streamingdediaservice_container -p 3004:3000 fiveguys4399/streamingdediaservice
docker run -d --name subscriptionservice_container -p 3005:3000 fiveguys4399/subscriptionservice

docker run -d --name creatoraccount_container -p 3006:3000 fiveguys4399/creatoraccount
docker run -d --name creatorsidehistory_container -p 3007:3000 fiveguys4399/creatorsidehistory
docker run -d --name serversidehistory_container -p 3008:3000 fiveguys4399/serversidehistory
docker run -d --name useraccount_container -p 3009:3000 fiveguys4399/useraccount
docker run -d --name usersidehistory_container -p 3010:3000 fiveguys4399/usersidehistory

docker run -d --name apigateways_container -p 3011:3000 fiveguys4399/apigateways
docker run -d --name ingestionservice_container -p 3012:3000 fiveguys4399/ingestionservice
docker run -d --name loadbalancer_container -p 3013:3000 fiveguys4399/loadbalancer
docker run -d --name usersidemanagerservice_container -p 3014:3000 fiveguys4399/usersidemanagerservice
docker run -d --name usersideservice_container -p 3015:3000 fiveguys4399/usersideservice

docker run -d --name circuitbre_container -p 3016:3000 fiveguys4399/circuitbre
docker run -d --name creatorside_container -p 3017:3000 fiveguys4399/creatorside
docker run -d --name creatorsideman_container -p 3018:3000 fiveguys4399/creatorsideman
docker run -d --name serverside_container -p 3019:3000 fiveguys4399/serverside
docker run -d --name serversidemanager_container -p 3020:3000 fiveguys4399/serversidemanager

# Run the network
# docker network create maxlive-net -d bridge
# docker network connect maxlive-net adminaccountservice_container
# docker network connect maxlive-net financialservice_container
# docker network connect maxlive-net platformservice_container 
# docker network connect maxlive-net streamingdediaservice_container 
# docker network connect maxlive-net subscriptionservice_container
# docker network connect maxlive-net creatoraccount_container
# docker network connect maxlive-net creatorsidehistory_container
# docker network connect maxlive-net serversidehistory_container
# docker network connect maxlive-net useraccount_container
# docker network connect maxlive-net usersidehistory_container
# docker network connect maxlive-net apigateways_container
# docker network connect maxlive-net ingestionservice_container
# docker network connect maxlive-net loadbalancer_container
# docker network connect maxlive-net usersidemanagerservice_container 
# docker network connect maxlive-net usersideservice_container
# docker network connect maxlive-net circuitbre_container
# docker network connect maxlive-net creatorside_container
# docker network connect maxlive-net creatorsideman_container
# docker network connect maxlive-net serverside_container
# docker network connect maxlive-net serversidemanager_container