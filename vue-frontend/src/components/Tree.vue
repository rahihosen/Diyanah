<template>
    <!-- <ul style="user-select: none;" class="d-flex flex-column list-group list-group-flush sidebar-category-box">
        <li>
            <div>
                <div @click="product(treeData.id)">
                    <div style="cursor: pointer;" class="d-flex justify-content-between category-tree">
                        <div class="d-flex">
                            <img v-if="treeData.depth == 0" style="padding-left: 10px"
                                :src="baseURL + 'category-icon/' + treeData.category_icon" width="25" height="25" />
                            <div :style="{ 'padding-left': (treeData.depth == 0 ? 8 : treeData.depth * 40) + 'px' }">{{
                                    treeData.name
                            }}</div>
                        </div>

                        <div>
                            <svg style="padding-right:8px; height:auto; width:20px"
                                v-if="treeData.children.length > 0 && !treeData.isOpen"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <svg style="padding-right:8px; height:auto; width:20px" v-if="treeData.isOpen"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <template v-if="treeData.isOpen">
                <tree v-for="child in treeData.children" :key="child.id" :treeData="child"></tree>
            </template>
        </li>
    </ul> -->
    <ul>
        <li><a href="#"><img src="../assets/images/grocery.jpg" alt="" class="category-image">Grocery </a>
            <ul class="submenu">
                <li><a href="#">Rice </a></li>
                <li><a href="#">Spices </a></li>
                <li><a href="#">Fruits & Vegetables </a>
                    <ul class="submenu">
                        <li><a href="#">Dates(Khejur) </a></li>
                        <li><a href="#">Fresh Fruits </a></li>
                        <li><a href="#">Vresh Vegetables </a></li>
                    </ul>
                </li>
                <li><a href="#">Cooking </a></li>
            </ul>
        </li>
        <li><a href="#"><img src="../assets/images/dairy.jpg" alt="" class="category-image">Dairy </a></li>
        <li><a href="#"><img src="../assets/images/organic.jpg" alt="" class="category-image">Organic </a></li>
        <li><a href="#"><img src="../assets/images/personal.jpg" alt="" class="category-image">Personal Care </a>
        </li>
        <li><a href="#"><img src="../assets/images/health.jpg" alt="" class="category-image">Baby Health & Care </a>
        </li>
        <li><a href="#"><img src="../assets/images/clean.jpg" alt="" class="category-image">Cleaning </a></li>
        <li><a href="#"><img src="../assets/images/beauty.jpg" alt="" class="category-image">Health & Beauty </a>
        </li>
    </ul>


</template>

<script>
export default {
    name: "tree",
    props: ["treeData"],

    data() {
        return {
            incrementalValue: 1,
            paddingSize: 0,
        }
    },
    methods: {
        product(id) {
            this.$router.push({
                name: 'product.show',
                params: { categoryId: id },
            })
            this.setOpen()
        },
        setOpen() {
            if (this.treeData.children.length > 0) {
                this.treeData.isOpen = !this.treeData.isOpen;
            }
        },
    },
}


jQuery(document).ready(function () {
    jQuery("#jquery-accordion-menu").jqueryAccordionMenu();
    jQuery(".colors a").click(function () {
        if ($(this).attr("class") != "default") {
            $("#jquery-accordion-menu").removeClass();
            $("#jquery-accordion-menu").addClass("jquery-accordion-menu").addClass($(this).attr("class"));
        } else {
            $("#jquery-accordion-menu").removeClass();
            $("#jquery-accordion-menu").addClass("jquery-accordion-menu");
        }
    });
});



</script>
<script setup>
import { ref } from "vue";

const baseURL = ref("");
baseURL.value = axios.defaults.baseURLPublic;

</script>
