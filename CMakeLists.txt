cmake_minimum_required(VERSION 3.15)
project(2021_CSKaoYan_408)

set(CMAKE_CXX_STANDARD 14)

# 遍历项目根目录下所有的 .cpp 文件
# 排除掉leetcode 下的代码，其不需要在Clion 中编译运行！
file (GLOB_RECURSE files ./*.cpp ./*/*.cpp   ./*/*/*.cpp)
foreach (file ${files})
    string(REGEX REPLACE ".+/(.+)\\..*" "\\1" exe ${file})
    add_executable (${exe} ${file})
    message (\ \ \ \ --\ src/${exe}.cpp\ will\ be\ compiled\ to\ bin/${exe})
endforeach ()