const brands_combo = document.querySelector("#brands_list");
const models_combo = document.querySelector("#models_list");
const years_combo = document.querySelector("#years_list");
const vehValue_input = document.querySelector("#vehValue_input");

const loadBrands = async () => {
    brands = await getAllBrands();
    return brands;
};

const loadModels = async (brand) => {
    models = await getAllModels(brand);
    return models;
};

const loadYears = async (brand, model) => {
    years = await getAllYears(brand, model);
    return years;
};

const loadVehValue = async (brand, model, year) => {
    vehValue = await getVehValue(brand, model, year);
    return vehValue;
};

document.addEventListener("DOMContentLoaded", async function () {
    brands = await loadBrands();
    brands.forEach((brand) => {
        brands_combo.append(
            new Option((text = brand.nome), (value = brand.codigo))
        );
    });
});

brands_combo.addEventListener("change", async function () {
    models = await loadModels(brands_combo.value);
    models_combo.innerHTML = '<option selected="" value="">Choose...</option>';
    models.forEach((model) => {
        models_combo.append(
            new Option((text = model.nome), (value = model.codigo))
        );
    });
    years_combo.innerHTML = '<option selected="" value="">Choose...</option>';
    vehValue_input.value = "";
});

models_combo.addEventListener("change", async function () {
    years = await loadYears(brands_combo.value, models_combo.value);
    years_combo.innerHTML = '<option selected="" value="">Choose...</option>';
    years.forEach((year) => {
        years_combo.append(
            new Option((text = year.nome), (value = year.codigo))
        );
    });
    vehValue_input.value = "";
});

years_combo.addEventListener("change", async function () {
    vehValue = await loadVehValue(
        brands_combo.value,
        models_combo.value,
        years_combo.value
    );
    vehValue_input.value = `${vehValue.Valor} (${vehValue.MesReferencia})`;
});
