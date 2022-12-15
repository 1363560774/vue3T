<template>
  <amis :amisjson="amisobj"></amis>
</template>
<script setup lang="ts">
import amis from "../components/amisT.vue";
const amisjson = "{\n" +
    "  \"type\": \"page\",\n" +
    "  \"title\": \"Hello world\",\n" +
    "  \"body\": [\n" +
    "    {\n" +
    "      \"type\": \"tpl\",\n" +
    "      \"tpl\": \"初始页面\",\n" +
    "      \"inline\": false,\n" +
    "      \"id\": \"u:a136a2ce4614\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"type\": \"nav\",\n" +
    "      \"stacked\": true,\n" +
    "      \"links\": [\n" +
    "        {\n" +
    "          \"label\": \"页面1\",\n" +
    "          \"to\": \"?id=1\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"label\": \"页面2\",\n" +
    "          \"to\": \"?id=2\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"id\": \"u:17246d13c550\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"type\": \"each\",\n" +
    "      \"name\": \"arr\",\n" +
    "      \"items\": {\n" +
    "        \"type\": \"tpl\",\n" +
    "        \"tpl\": \"<%= data.index + 1 %>. 内容：<%= data.item %>\",\n" +
    "        \"inline\": false\n" +
    "      },\n" +
    "      \"id\": \"u:c5b0e85b05a7\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"type\": \"crud\",\n" +
    "      \"syncLocation\": false,\n" +
    "      \"api\": {\n" +
    "        \"method\": \"get\",\n" +
    "        \"url\": \"1111\"\n" +
    "      },\n" +
    "      \"columns\": [\n" +
    "        {\n" +
    "          \"name\": \"id\",\n" +
    "          \"label\": \"ID\",\n" +
    "          \"type\": \"text\",\n" +
    "          \"id\": \"u:ca93212691af\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"name\": \"engine\",\n" +
    "          \"label\": \"渲染引擎\",\n" +
    "          \"type\": \"text\",\n" +
    "          \"id\": \"u:bfe59e71dd7c\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"bulkActions\": [\n" +
    "      ],\n" +
    "      \"itemActions\": [\n" +
    "      ],\n" +
    "      \"id\": \"u:20d1e7790382\"\n" +
    "    }\n" +
    "  ],\n" +
    "  \"id\": \"u:b2122be55535\"\n" +
    "}"

const amisobj = JSON.parse(amisjson)
// const amisjson={
//   type: 'page',
//   title: '表单页面',
//   body: {
//     type: 'form',
//     mode: 'horizontal',
//     api: '/saveForm',
//     body: [
//       {
//         label: 'Name',
//         type: 'input-text',
//         name: 'name'
//       },
//       {
//         label: 'Email',
//         type: 'input-email',
//         name: 'email'
//       }
//     ]
//   }
// }
</script>
