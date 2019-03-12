<template>
	<div class="hello">
		<el-button type="primary" @click="submitForm()">查询</el-button>
		<el-button type="primary" @click="resetForm()">清空</el-button>
		<!-- <el-row v-for="item in dataList" :key="item.id">
			<div class="flex-demo">
				<h3>
	        {{item.articleTitle}}
	      </h3>
				<p>
					{{item.articleContent}}
				</p>
			</div>
		</el-row> -->
		<el-table
	    :data="dataList"
	    style="width: 100%">
	    <el-table-column
	      label="标题"
	      width="180">
	      <template slot-scope="scope">
	        <el-popover trigger="hover" placement="top">
	          <p>标题: {{ scope.row.articleTitle }}</p>
	          <p>内容: {{ scope.row.articleContent }}</p>
	          <div slot="reference" class="name-wrapper">
	            <el-tag size="medium">{{ scope.row.articleTitle }}</el-tag>
	          </div>
	        </el-popover>
	      </template>
	    </el-table-column>
	    <el-table-column label="操作">
	      <template slot-scope="scope">
	        <el-button
	          size="mini"
	          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
	        <el-button
	          size="mini"
	          type="danger"
	          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				dataList: []
			}
		},
		created() {
      var vm = this;
        vm.$axios({
          method: 'post',
          url: '/blog/articleQurey',
          data: {}
        }).then(function(res) {
          vm.dataList = res.data.data;
        })
		},
	  methods: {
      submitForm() {
        var vm = this;
				vm.$axios({
					method: 'post',
					url: '/blog/articleQurey',
					data: {}
				}).then(function(res) {
					vm.dataList = res.data.data;
				})
      },
      resetForm() {
        var vm = this;
        vm.dataList = [];
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
	}
</script>

<!-- 添加scoped属性到style标签,使以下样式仅作用于当前组件 -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}

	.flex-demo {
		width: 90%;
		margin: 0 auto;
		height: 140px;
	}

	.flex-demo p {
		word-wrap: break-word;
		text-align: left;
	}
</style>
