import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('6a587b4e-0c63-486d-a392-f1c37abb94f3', '1Hollis67@hotmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv77889mno', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('386aafa1-d665-454e-a72e-f72c579d69ba', '10Alexzander.Wintheiser80@yahoo.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=12', 'inv11223ghi', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('45fae705-9bae-4a64-8c1a-3cf1087cc2ff', '19Halie75@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inv11223ghi', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('aa06993c-43af-4319-8cf3-18d5fd1645aa', '28Jayme93@hotmail.com', 'Emily White', 'https://i.imgur.com/YfJQV5z.png?id=30', 'inv11223ghi', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('c3123b07-a269-469c-882f-0b4bda135aba', '46Eda35@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=48', 'inv11223ghi', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('07318dfe-ae32-4d7f-84ad-2e7fb07e118e', '55Rosalinda41@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=57', 'inv67890def', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('77d70d65-04a5-4a1e-8ea0-c9206b282581', '64Nathan.Turner@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv67890def', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('75a2f78b-ded1-459b-a915-6a64af86cf1a', '73Rodger23@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv67890def', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('80b4f3f8-2fa2-45bc-b318-6187b5f6e39d', '82Isadore87@gmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=84', 'inv12345abc', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('a050690b-2c38-4a49-bc51-0427f6ffdc41', 'httpsalerts.pushapp.nettriggerghi012', 'sub_567stu890vwx', '45fae705-9bae-4a64-8c1a-3cf1087cc2ff');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('8ca50867-56e7-4b28-9da9-94e6f39411f9', 'httpspush.example.comendpointxyz789', 'sub_345ghi678jkl', '77d70d65-04a5-4a1e-8ea0-c9206b282581');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('7d3296e8-bbb7-45f1-96e8-bb3a453476f8', 'httpspush.example.comendpointxyz789', 'sub_567stu890vwx', 'aa06993c-43af-4319-8cf3-18d5fd1645aa');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('f9a8f7e4-3f69-40b1-ab2b-f77ebcc928fa', 'httpsapi.pushservice.comnotifyabc123', 'sub_901mno234pqr', '07318dfe-ae32-4d7f-84ad-2e7fb07e118e');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('cb1249c5-5b4d-47d4-b85d-88523555a2be', 'httpsapi.pushservice.comnotifyabc123', 'sub_00123abc456', 'aa06993c-43af-4319-8cf3-18d5fd1645aa');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('eca0ef63-fa75-47ff-bf2b-8e9c7ac55f48', 'httpsalerts.pushapp.nettriggerghi012', 'sub_345ghi678jkl', '6a587b4e-0c63-486d-a392-f1c37abb94f3');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('121720ce-4fd6-4fa0-9545-20f2baa8f812', 'httpspush.example.comendpointxyz789', 'sub_00123abc456', '45fae705-9bae-4a64-8c1a-3cf1087cc2ff');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('ccd8583a-57c1-43b8-b0af-c538819b7b16', 'httpsapi.pushservice.comnotifyabc123', 'sub_567stu890vwx', 'aa06993c-43af-4319-8cf3-18d5fd1645aa');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('109ea061-bacc-46d6-8e2a-19e5d9f3ec05', 'httpsnotifications.service.iosenddef456', 'sub_00123abc456', '6a587b4e-0c63-486d-a392-f1c37abb94f3');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('e77a57f9-2a51-4ded-ad40-4bc98a8adf11', 'httpspush.example.comendpointxyz789', 'sub_789xyz012def', '45fae705-9bae-4a64-8c1a-3cf1087cc2ff');

INSERT INTO "AiAgent" ("id", "name", "description", "availabilitySchedule", "status", "userId") VALUES ('e2793779-0cb2-4ae7-afd6-7bd5605ca6e2', 'DesignGenie', 'A creative AI agent for graphic design and visual content.', 'Weekends only', 'Under Maintenance', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "AiAgent" ("id", "name", "description", "availabilitySchedule", "status", "userId") VALUES ('0f380aa4-7415-4f9b-a44d-23eda7a9f902', 'SupportGuru', 'An AI agent providing customer support and service solutions.', 'Weekends only', 'Busy', 'aa06993c-43af-4319-8cf3-18d5fd1645aa');
INSERT INTO "AiAgent" ("id", "name", "description", "availabilitySchedule", "status", "userId") VALUES ('302fe952-3d4f-495c-b3f2-8635f0324d33', 'MarketingWhiz', 'An AI agent specialized in writing clean and efficient code.', 'MonFri 9am5pm', 'Busy', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "AiAgent" ("id", "name", "description", "availabilitySchedule", "status", "userId") VALUES ('a855489c-4aa7-4abc-8b7c-d030f8fee326', 'MarketingWhiz', 'An AI agent specialized in writing clean and efficient code.', 'Flexible hours', 'Busy', '45fae705-9bae-4a64-8c1a-3cf1087cc2ff');
INSERT INTO "AiAgent" ("id", "name", "description", "availabilitySchedule", "status", "userId") VALUES ('e416f4d7-02ca-4e7d-b951-415c1d1f0ecb', 'CodeMasterBot', 'An AI agent providing customer support and service solutions.', 'MonSat 10am6pm', 'Active', '45fae705-9bae-4a64-8c1a-3cf1087cc2ff');
INSERT INTO "AiAgent" ("id", "name", "description", "availabilitySchedule", "status", "userId") VALUES ('b2b7ff5b-a0ca-4fd9-8f0a-aa875b1876c3', 'CodeMasterBot', 'An AI agent focused on digital marketing and SEO optimization.', 'Weekends only', 'Under Maintenance', 'aa06993c-43af-4319-8cf3-18d5fd1645aa');
INSERT INTO "AiAgent" ("id", "name", "description", "availabilitySchedule", "status", "userId") VALUES ('7b7be340-3c5a-4525-8014-6c6b84303558', 'DataCruncher', 'An AI agent providing customer support and service solutions.', 'Weekends only', 'Busy', '77d70d65-04a5-4a1e-8ea0-c9206b282581');
INSERT INTO "AiAgent" ("id", "name", "description", "availabilitySchedule", "status", "userId") VALUES ('392211b2-3a7f-46fb-a7bf-dc70d97d06e6', 'SupportGuru', 'An AI agent specialized in writing clean and efficient code.', 'Weekends only', 'Busy', '6a587b4e-0c63-486d-a392-f1c37abb94f3');
INSERT INTO "AiAgent" ("id", "name", "description", "availabilitySchedule", "status", "userId") VALUES ('de48ce6c-5022-44ad-9212-3556b3c35e0a', 'MarketingWhiz', 'An AI agent providing customer support and service solutions.', 'Flexible hours', 'Busy', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "AiAgent" ("id", "name", "description", "availabilitySchedule", "status", "userId") VALUES ('1c11e5a0-b82f-4659-8ba8-c07de822e7db', 'DesignGenie', 'An AI agent for data analysis and insights generation.', 'Flexible hours', 'Under Maintenance', 'aa06993c-43af-4319-8cf3-18d5fd1645aa');

INSERT INTO "Tag" ("id", "name", "type") VALUES ('78a93dd2-3278-495d-a615-df7e3dc4dfc8', 'Web Development', 'Function');
INSERT INTO "Tag" ("id", "name", "type") VALUES ('81f6c959-8456-4875-bcfc-c7be608b0b41', 'AI Writing', 'Category');
INSERT INTO "Tag" ("id", "name", "type") VALUES ('31800293-bdb4-45be-9c47-75ea6c6182d3', 'Customer Support', 'Category');
INSERT INTO "Tag" ("id", "name", "type") VALUES ('642fc678-f611-4e60-aa42-6c117b249a97', 'AI Writing', 'Service');
INSERT INTO "Tag" ("id", "name", "type") VALUES ('83627efb-962b-4194-bcd7-8d413f5d6c6d', 'AI Writing', 'Department');
INSERT INTO "Tag" ("id", "name", "type") VALUES ('b0dab9ef-0570-4abc-97c2-e16f6830d801', 'Data Analysis', 'Category');
INSERT INTO "Tag" ("id", "name", "type") VALUES ('57229f9c-ed37-484f-a3f6-ee7dbb3c9bc3', 'AI Writing', 'Function');
INSERT INTO "Tag" ("id", "name", "type") VALUES ('f49edc1c-1afe-4820-a86e-795bb496558f', 'Data Analysis', 'Skill');
INSERT INTO "Tag" ("id", "name", "type") VALUES ('86cacd92-9df2-4212-b725-facfafc9256f', 'AI Writing', 'Function');
INSERT INTO "Tag" ("id", "name", "type") VALUES ('645663fe-09d1-4633-a3f6-b0ffe82c6a94', 'AI Writing', 'Department');

INSERT INTO "AiAgentTag" ("id", "aiAgentId", "tagId") VALUES ('6ebfdbf8-eda9-4bd8-a3fe-d4e75b965006', '0f380aa4-7415-4f9b-a44d-23eda7a9f902', '642fc678-f611-4e60-aa42-6c117b249a97');
INSERT INTO "AiAgentTag" ("id", "aiAgentId", "tagId") VALUES ('3d64842f-7319-4f2f-871b-d150e9535fdf', '7b7be340-3c5a-4525-8014-6c6b84303558', '83627efb-962b-4194-bcd7-8d413f5d6c6d');
INSERT INTO "AiAgentTag" ("id", "aiAgentId", "tagId") VALUES ('750117c7-266c-421a-893b-286720ffd1a2', '0f380aa4-7415-4f9b-a44d-23eda7a9f902', '81f6c959-8456-4875-bcfc-c7be608b0b41');
INSERT INTO "AiAgentTag" ("id", "aiAgentId", "tagId") VALUES ('f928ba42-e7cf-4ef7-9d6c-6d9f92ddb6a1', 'b2b7ff5b-a0ca-4fd9-8f0a-aa875b1876c3', '86cacd92-9df2-4212-b725-facfafc9256f');
INSERT INTO "AiAgentTag" ("id", "aiAgentId", "tagId") VALUES ('16469890-dbc4-4373-a0b1-96e57c50251f', 'de48ce6c-5022-44ad-9212-3556b3c35e0a', '642fc678-f611-4e60-aa42-6c117b249a97');
INSERT INTO "AiAgentTag" ("id", "aiAgentId", "tagId") VALUES ('78789b7c-c893-4280-83d9-cc5675940930', 'e2793779-0cb2-4ae7-afd6-7bd5605ca6e2', '645663fe-09d1-4633-a3f6-b0ffe82c6a94');
INSERT INTO "AiAgentTag" ("id", "aiAgentId", "tagId") VALUES ('4197931d-ecc9-4634-ba00-c23d1561f4e2', '7b7be340-3c5a-4525-8014-6c6b84303558', '78a93dd2-3278-495d-a615-df7e3dc4dfc8');
INSERT INTO "AiAgentTag" ("id", "aiAgentId", "tagId") VALUES ('c87bed64-e9f6-408e-a4ec-eaad441e0a6b', 'a855489c-4aa7-4abc-8b7c-d030f8fee326', '31800293-bdb4-45be-9c47-75ea6c6182d3');
INSERT INTO "AiAgentTag" ("id", "aiAgentId", "tagId") VALUES ('baafe92f-c357-4309-8d90-1fe493543e42', '0f380aa4-7415-4f9b-a44d-23eda7a9f902', 'f49edc1c-1afe-4820-a86e-795bb496558f');
INSERT INTO "AiAgentTag" ("id", "aiAgentId", "tagId") VALUES ('d3709a3a-b1bd-4ae9-8d0d-502daaae1277', '392211b2-3a7f-46fb-a7bf-dc70d97d06e6', '57229f9c-ed37-484f-a3f6-ee7dbb3c9bc3');

INSERT INTO "PricingOption" ("id", "type", "price", "aiAgentId") VALUES ('a7070740-fc05-47d8-8023-0766c5bd6315', 'pay as you go', 630, '7b7be340-3c5a-4525-8014-6c6b84303558');
INSERT INTO "PricingOption" ("id", "type", "price", "aiAgentId") VALUES ('e7b3a1fa-cc14-40a9-97dc-9a68601721fd', 'per project', 977, 'a855489c-4aa7-4abc-8b7c-d030f8fee326');
INSERT INTO "PricingOption" ("id", "type", "price", "aiAgentId") VALUES ('6e0cae13-d312-456c-b832-09e45a247fbf', 'subscription', 459, '302fe952-3d4f-495c-b3f2-8635f0324d33');
INSERT INTO "PricingOption" ("id", "type", "price", "aiAgentId") VALUES ('e3543320-8ba2-4b95-ad0c-a3e924e5e264', 'subscription', 24, 'e2793779-0cb2-4ae7-afd6-7bd5605ca6e2');
INSERT INTO "PricingOption" ("id", "type", "price", "aiAgentId") VALUES ('19c3a489-c7a4-40b9-8406-cb90514faadc', 'per hour', 843, 'e416f4d7-02ca-4e7d-b951-415c1d1f0ecb');
INSERT INTO "PricingOption" ("id", "type", "price", "aiAgentId") VALUES ('740f7340-2b61-4b2a-9234-bd77041a7d88', 'per hour', 145, 'a855489c-4aa7-4abc-8b7c-d030f8fee326');
INSERT INTO "PricingOption" ("id", "type", "price", "aiAgentId") VALUES ('d52871e9-64be-4e05-af22-fad4380d32b6', 'onetime fee', 773, 'de48ce6c-5022-44ad-9212-3556b3c35e0a');
INSERT INTO "PricingOption" ("id", "type", "price", "aiAgentId") VALUES ('bd399e63-07d1-4728-98ac-4234fdf15fdc', 'per hour', 918, '302fe952-3d4f-495c-b3f2-8635f0324d33');
INSERT INTO "PricingOption" ("id", "type", "price", "aiAgentId") VALUES ('8f3525dd-cd51-4eb8-be89-524fbb28aa05', 'subscription', 166, 'de48ce6c-5022-44ad-9212-3556b3c35e0a');
INSERT INTO "PricingOption" ("id", "type", "price", "aiAgentId") VALUES ('0a03b0bd-1912-41f6-b238-203dc37f990b', 'subscription', 166, 'b2b7ff5b-a0ca-4fd9-8f0a-aa875b1876c3');

INSERT INTO "Hire" ("id", "projectDetails", "status", "userId", "aiAgentId", "pricingOptionId") VALUES ('6218331f-0174-49d1-922d-ddc9f7939579', 'Create an AI model for image recognition', 'Completed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a855489c-4aa7-4abc-8b7c-d030f8fee326', '8f3525dd-cd51-4eb8-be89-524fbb28aa05');
INSERT INTO "Hire" ("id", "projectDetails", "status", "userId", "aiAgentId", "pricingOptionId") VALUES ('5441c574-2f87-4304-91fb-b0c02e092e8b', 'Create an AI model for image recognition', 'In Progress', '45fae705-9bae-4a64-8c1a-3cf1087cc2ff', 'de48ce6c-5022-44ad-9212-3556b3c35e0a', '6e0cae13-d312-456c-b832-09e45a247fbf');
INSERT INTO "Hire" ("id", "projectDetails", "status", "userId", "aiAgentId", "pricingOptionId") VALUES ('d8ca933c-eba2-43a5-b278-adf48a5e0977', 'Develop a chatbot for customer support', 'In Progress', '386aafa1-d665-454e-a72e-f72c579d69ba', '7b7be340-3c5a-4525-8014-6c6b84303558', '6e0cae13-d312-456c-b832-09e45a247fbf');
INSERT INTO "Hire" ("id", "projectDetails", "status", "userId", "aiAgentId", "pricingOptionId") VALUES ('492e2b51-8c6b-410b-ab0f-81d2bfa16a84', 'Design a recommendation engine for ecommerce', 'Completed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a855489c-4aa7-4abc-8b7c-d030f8fee326', 'e7b3a1fa-cc14-40a9-97dc-9a68601721fd');
INSERT INTO "Hire" ("id", "projectDetails", "status", "userId", "aiAgentId", "pricingOptionId") VALUES ('8fa5475d-28bc-47f4-8a5a-cff06c67798b', 'Develop a chatbot for customer support', 'Pending', 'c3123b07-a269-469c-882f-0b4bda135aba', 'b2b7ff5b-a0ca-4fd9-8f0a-aa875b1876c3', '6e0cae13-d312-456c-b832-09e45a247fbf');
INSERT INTO "Hire" ("id", "projectDetails", "status", "userId", "aiAgentId", "pricingOptionId") VALUES ('46ae458b-446a-43d5-8ae9-46fd77e60b0f', 'Implement a voice assistant for smart home devices', 'In Progress', '6a587b4e-0c63-486d-a392-f1c37abb94f3', 'de48ce6c-5022-44ad-9212-3556b3c35e0a', '19c3a489-c7a4-40b9-8406-cb90514faadc');
INSERT INTO "Hire" ("id", "projectDetails", "status", "userId", "aiAgentId", "pricingOptionId") VALUES ('62fc5257-dec9-488e-930a-6d551cbdf0b3', 'Create an AI model for image recognition', 'Completed', '77d70d65-04a5-4a1e-8ea0-c9206b282581', 'e2793779-0cb2-4ae7-afd6-7bd5605ca6e2', '0a03b0bd-1912-41f6-b238-203dc37f990b');
INSERT INTO "Hire" ("id", "projectDetails", "status", "userId", "aiAgentId", "pricingOptionId") VALUES ('6377bd65-17f2-47a6-87a5-b992fc06e1cf', 'Implement a voice assistant for smart home devices', 'Cancelled', 'c3123b07-a269-469c-882f-0b4bda135aba', 'de48ce6c-5022-44ad-9212-3556b3c35e0a', 'bd399e63-07d1-4728-98ac-4234fdf15fdc');
INSERT INTO "Hire" ("id", "projectDetails", "status", "userId", "aiAgentId", "pricingOptionId") VALUES ('3005adb5-749c-468e-befa-28d794d49635', 'Create an AI model for image recognition', 'Pending', 'c3123b07-a269-469c-882f-0b4bda135aba', '7b7be340-3c5a-4525-8014-6c6b84303558', 'e3543320-8ba2-4b95-ad0c-a3e924e5e264');
INSERT INTO "Hire" ("id", "projectDetails", "status", "userId", "aiAgentId", "pricingOptionId") VALUES ('a6f72899-6599-4c9a-9d7c-d09dd67f1e1a', 'Develop a chatbot for customer support', 'On Hold', '07318dfe-ae32-4d7f-84ad-2e7fb07e118e', 'e2793779-0cb2-4ae7-afd6-7bd5605ca6e2', '8f3525dd-cd51-4eb8-be89-524fbb28aa05');

INSERT INTO "Review" ("id", "rating", "comment", "userId", "aiAgentId") VALUES ('61feba09-7ed2-4b9b-bf47-5253d73845c3', 925, 'Terrible service would not recommend.', '77d70d65-04a5-4a1e-8ea0-c9206b282581', 'b2b7ff5b-a0ca-4fd9-8f0a-aa875b1876c3');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "aiAgentId") VALUES ('6f704db3-55c7-4dae-9ec9-86c2bf7a7006', 178, 'This AI agent exceeded my expectations', 'c3123b07-a269-469c-882f-0b4bda135aba', 'e416f4d7-02ca-4e7d-b951-415c1d1f0ecb');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "aiAgentId") VALUES ('741f9d44-f1d3-45d5-ae15-810a553165c1', 596, 'Good performance but theres room for improvement.', '386aafa1-d665-454e-a72e-f72c579d69ba', 'b2b7ff5b-a0ca-4fd9-8f0a-aa875b1876c3');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "aiAgentId") VALUES ('14f8614d-cd26-4d0a-a0ae-5b87b6642e62', 257, 'This AI agent exceeded my expectations', 'c3123b07-a269-469c-882f-0b4bda135aba', '0f380aa4-7415-4f9b-a44d-23eda7a9f902');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "aiAgentId") VALUES ('c3022b5c-3500-4b4f-9422-0e37a0e182cd', 87, 'This AI agent exceeded my expectations', '75a2f78b-ded1-459b-a915-6a64af86cf1a', '302fe952-3d4f-495c-b3f2-8635f0324d33');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "aiAgentId") VALUES ('b8aeff84-1bb9-4b56-bb5f-f3e06ae1a8f3', 117, 'Terrible service would not recommend.', '80b4f3f8-2fa2-45bc-b318-6187b5f6e39d', 'e416f4d7-02ca-4e7d-b951-415c1d1f0ecb');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "aiAgentId") VALUES ('edf63fc6-dcb2-42bd-8e42-dcba8da3d7ce', 98, 'This AI agent exceeded my expectations', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e2793779-0cb2-4ae7-afd6-7bd5605ca6e2');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "aiAgentId") VALUES ('9307d52c-d527-4e39-a963-94e0f0cbbc3c', 350, 'The AI struggled with the task not very satisfied.', '80b4f3f8-2fa2-45bc-b318-6187b5f6e39d', '0f380aa4-7415-4f9b-a44d-23eda7a9f902');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "aiAgentId") VALUES ('4e24b27e-484e-44ad-bfa9-01edaf1e2e7a', 454, 'This AI agent exceeded my expectations', '75a2f78b-ded1-459b-a915-6a64af86cf1a', 'e416f4d7-02ca-4e7d-b951-415c1d1f0ecb');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "aiAgentId") VALUES ('b7543766-5fe6-4f32-9fda-05704811ee4f', 309, 'Average experience nothing special.', '77d70d65-04a5-4a1e-8ea0-c9206b282581', 'de48ce6c-5022-44ad-9212-3556b3c35e0a');

INSERT INTO "AiAgentImage" ("id", "imageUrl", "aiAgentId") VALUES ('49b4b055-4d20-4797-9a01-b8254b75336d', 'https://i.imgur.com/YfJQV5z.png?id=301', 'de48ce6c-5022-44ad-9212-3556b3c35e0a');
INSERT INTO "AiAgentImage" ("id", "imageUrl", "aiAgentId") VALUES ('d8993641-f75d-4699-824a-1ddaf8c19655', 'https://i.imgur.com/YfJQV5z.png?id=303', 'e416f4d7-02ca-4e7d-b951-415c1d1f0ecb');
INSERT INTO "AiAgentImage" ("id", "imageUrl", "aiAgentId") VALUES ('01f65485-9427-4e6a-842e-5fb49bff812c', 'https://i.imgur.com/YfJQV5z.png?id=305', 'a855489c-4aa7-4abc-8b7c-d030f8fee326');
INSERT INTO "AiAgentImage" ("id", "imageUrl", "aiAgentId") VALUES ('8be4f31c-e8ae-455d-9b85-749285146091', 'https://i.imgur.com/YfJQV5z.png?id=307', '302fe952-3d4f-495c-b3f2-8635f0324d33');
INSERT INTO "AiAgentImage" ("id", "imageUrl", "aiAgentId") VALUES ('8f9b1dd0-eb7b-435c-8b23-2d97d1a05351', 'https://i.imgur.com/YfJQV5z.png?id=309', '0f380aa4-7415-4f9b-a44d-23eda7a9f902');
INSERT INTO "AiAgentImage" ("id", "imageUrl", "aiAgentId") VALUES ('2afb59f4-c851-46c6-ace4-9aacf1622fcf', 'https://i.imgur.com/YfJQV5z.png?id=311', '1c11e5a0-b82f-4659-8ba8-c07de822e7db');
INSERT INTO "AiAgentImage" ("id", "imageUrl", "aiAgentId") VALUES ('93145d6d-25ba-4d25-8594-b0c4dd0e39e3', 'https://i.imgur.com/YfJQV5z.png?id=313', '392211b2-3a7f-46fb-a7bf-dc70d97d06e6');
INSERT INTO "AiAgentImage" ("id", "imageUrl", "aiAgentId") VALUES ('44db8d6b-d41e-46f9-bd0a-c3cb8387dad8', 'https://i.imgur.com/YfJQV5z.png?id=315', '0f380aa4-7415-4f9b-a44d-23eda7a9f902');
INSERT INTO "AiAgentImage" ("id", "imageUrl", "aiAgentId") VALUES ('7deb9a2e-42b7-4d8a-9341-838a60568959', 'https://i.imgur.com/YfJQV5z.png?id=317', '7b7be340-3c5a-4525-8014-6c6b84303558');
INSERT INTO "AiAgentImage" ("id", "imageUrl", "aiAgentId") VALUES ('a5afc0c4-79f0-4071-b9ed-ac98668b754c', 'https://i.imgur.com/YfJQV5z.png?id=319', '392211b2-3a7f-46fb-a7bf-dc70d97d06e6');

INSERT INTO "Message" ("id", "content", "senderUserId", "recipientUserId", "hireId") VALUES ('30927b79-1bc5-495d-85f4-db9d688498a1', 'How does this AI compare to others in the same category', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '46ae458b-446a-43d5-8ae9-46fd77e60b0f');
INSERT INTO "Message" ("id", "content", "senderUserId", "recipientUserId", "hireId") VALUES ('3d51ced9-9cfb-4ae5-af68-85c09f89a355', 'What are the pricing options for this AI agent', '07318dfe-ae32-4d7f-84ad-2e7fb07e118e', '07318dfe-ae32-4d7f-84ad-2e7fb07e118e', '492e2b51-8c6b-410b-ab0f-81d2bfa16a84');
INSERT INTO "Message" ("id", "content", "senderUserId", "recipientUserId", "hireId") VALUES ('3fb3dd61-054a-4b64-b061-e8c4aa7bf037', 'Can I see a demo of this AI agent in action', '77d70d65-04a5-4a1e-8ea0-c9206b282581', 'aa06993c-43af-4319-8cf3-18d5fd1645aa', '5441c574-2f87-4304-91fb-b0c02e092e8b');
INSERT INTO "Message" ("id", "content", "senderUserId", "recipientUserId", "hireId") VALUES ('a25ac619-81ba-4eba-b3d6-037b3185ec04', 'Im looking for an AI agent to manage my social media accounts.', '45fae705-9bae-4a64-8c1a-3cf1087cc2ff', '75a2f78b-ded1-459b-a915-6a64af86cf1a', '8fa5475d-28bc-47f4-8a5a-cff06c67798b');
INSERT INTO "Message" ("id", "content", "senderUserId", "recipientUserId", "hireId") VALUES ('20b73ade-4e13-46bf-9ce8-36d5fb9ac9bc', 'How does this AI compare to others in the same category', '07318dfe-ae32-4d7f-84ad-2e7fb07e118e', '77d70d65-04a5-4a1e-8ea0-c9206b282581', 'd8ca933c-eba2-43a5-b278-adf48a5e0977');
INSERT INTO "Message" ("id", "content", "senderUserId", "recipientUserId", "hireId") VALUES ('1d521341-7d5e-4609-9124-068c866afd3c', 'Can I see a demo of this AI agent in action', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '77d70d65-04a5-4a1e-8ea0-c9206b282581', 'd8ca933c-eba2-43a5-b278-adf48a5e0977');
INSERT INTO "Message" ("id", "content", "senderUserId", "recipientUserId", "hireId") VALUES ('b52d6b6f-b13f-4a18-8cb4-f465d7f6e13e', 'Im looking for an AI agent to manage my social media accounts.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '77d70d65-04a5-4a1e-8ea0-c9206b282581', 'd8ca933c-eba2-43a5-b278-adf48a5e0977');
INSERT INTO "Message" ("id", "content", "senderUserId", "recipientUserId", "hireId") VALUES ('7ec8fd78-5eb9-40cd-a2ba-55b2c79b3b92', 'What are the pricing options for this AI agent', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a6f72899-6599-4c9a-9d7c-d09dd67f1e1a');
INSERT INTO "Message" ("id", "content", "senderUserId", "recipientUserId", "hireId") VALUES ('07bfae9f-eaec-4b9b-9b13-391cf2ccf0af', 'Can I see a demo of this AI agent in action', '6a587b4e-0c63-486d-a392-f1c37abb94f3', 'aa06993c-43af-4319-8cf3-18d5fd1645aa', '5441c574-2f87-4304-91fb-b0c02e092e8b');
INSERT INTO "Message" ("id", "content", "senderUserId", "recipientUserId", "hireId") VALUES ('debd3382-6bb1-4cc7-a7d8-17e253697642', 'How does this AI compare to others in the same category', '77d70d65-04a5-4a1e-8ea0-c9206b282581', '80b4f3f8-2fa2-45bc-b318-6187b5f6e39d', '62fc5257-dec9-488e-930a-6d551cbdf0b3');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
